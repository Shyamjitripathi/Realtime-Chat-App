import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='a564ef3e-d6b6-44b1-8c8e-75596f780eba'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
}

export default ChatsPage;