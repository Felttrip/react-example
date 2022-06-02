import React from "react"
import { Pane, majorScale, Text, Link, Image, Code, Alert } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import SimpleButtonExample from "./SimpleButtonExample"

const Track: React.FC = () => {
  return (
    <Pane display="flex" flexDirection="column">
      <Text marginTop={majorScale(1)} marginBottom={majorScale(4)}>
        analytics.track()
      </Text>
      <Text marginBottom={majorScale(3)}>
        The Track call records any actions users perform on your site, along
        with any properties that describe the action.
      </Text>
      <SimpleButtonExample />
      <Text marginY={majorScale(3)}>
        Each time you click the button, a basic{" "}
        <Link
          href="https://segment.com/docs/connections/spec/track/"
          target="blank_"
        >
          Track
        </Link>{" "}
        call <Code>(Button Clicked)</Code>is fired and sent to the Source debugger:
      </Text>

      <Image
        maxWidth="75%"
        src={DebuggerImage}
        alt="Debugger with track() call"
      />
      <Alert
        marginTop={majorScale(3)}
        intent="none"
        title={
          <Text>
            When this track call is fired, Segment assigns an{" "}
            <Link
              href="https://segment.com/docs/connections/spec/track/#identities"
              target="blank_"
            >
              anonymous user id
            </Link>{" "}
            .
          </Text>
        }
      />
    </Pane>
  )
}

export default Track
