//
//  RNTCameraViewManager.m
//  MerantixCam
//
//  Created by Malith Thilakarathne on 2023-01-01.
//

#import <Foundation/Foundation.h> // TODO: Remove this if not needed
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNTCameraViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onCapture, RCTBubblingEventBlock)
RCT_EXTERN_METHOD(takePhoto:(nonnull NSNumber *)node)
@end
