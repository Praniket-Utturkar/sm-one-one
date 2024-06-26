import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = () => {
    const { roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 541999828;
        const serverSecret = "d1548b405730a2ac44001111bc2c852c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Name");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://localhost:3000/room/${roomId}`,
            }
        ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage