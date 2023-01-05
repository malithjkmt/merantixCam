//
//  RNTCameraView.swift
//  MerantixCam
//
//  https://gist.github.com/ArsenyYankovsky/212c62e2915b9ca6c0cc4822d5a3399a
//

import ARKit
import UIKit

func imageFrom(scene:ARSCNView) -> UIImage {
    UIGraphicsBeginImageContextWithOptions(scene.bounds.size, scene.isOpaque, 0.0)
    scene.drawHierarchy(in: scene.bounds, afterScreenUpdates: false)
    let image = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    return UIImage(cgImage: (image?.cgImage)!)
}

@objc @objcMembers
class RNTCameraView: UIView, ARSCNViewDelegate {
    var sceneView: ARSCNView?
    var lightModel: SCNMaterial.LightingModel = .physicallyBased
    var videoFormat: ARFaceTrackingConfiguration.VideoFormat?
    public var onCapture: RCTBubblingEventBlock?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        let rect = CGRect(x: 0, y: 0, width: frame.width, height: frame.height)
        sceneView = ARSCNView(frame: rect)
        self.layer.cornerRadius = 25
        self.layer.masksToBounds = true;
        self.addSubview(sceneView!)
        sceneView!.delegate = self
        sceneView!.showsStatistics = false
        
        let configuration = ARFaceTrackingConfiguration()
        videoFormat = configuration.videoFormat
      
        self.start()
    }
  
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
  
    override func layoutSubviews() {
        super.layoutSubviews()
        let rect = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
        self.sceneView?.frame = rect
    }
    
    public func start() {
        let configuration = ARFaceTrackingConfiguration()
        configuration.isLightEstimationEnabled = true
        configuration.videoFormat = videoFormat!
        sceneView!.session.run(configuration)
    }
  
    public func takePhoto() {
      let path = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first!
      let url = URL(fileURLWithPath: path).appendingPathComponent("photoProcessed.png")
      
      try! imageFrom(scene: self.sceneView!).pngData()?.write(to: url)
      
      self.onCapture?(["url":url.path])
    }
}