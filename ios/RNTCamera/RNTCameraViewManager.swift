//
//  RNTCameraViewManager.swift
//  MerantixCam
//
//  Created by Malith Thilakarathne on 2023-01-01.
//

import Foundation

@objc(RNTCameraViewManager)
class RNTCameraViewManager: RCTViewManager {
  override func view() -> UIView! {
    return RNTCameraView()
  }

	override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc func takePhoto(_ node: NSNumber) {
      DispatchQueue.main.async {
        let component = self.bridge.uiManager.view(
            forReactTag: node
        ) as! RNTCameraView
        component.takePhoto()
      }
  }
}