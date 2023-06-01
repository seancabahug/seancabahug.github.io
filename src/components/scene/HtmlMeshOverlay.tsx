import { Html, Scroll } from '@react-three/drei'
import Name from '../overlay/Name'
import { SceneSection } from '../../consts'
import "./HtmlStyles.css"
import Projects from '../overlay/Projects'

type Props = {
    currentSection: SceneSection,
    currentProjectId: number
}

const HtmlMeshOverlay = (props: Props) => {
  return (
    <>
      <Html
        wrapperClass="html_wrapper"
        transform
        position={[-1.043 + (0.33 * Math.cos(-1.16)), 0.71, -1.202 + (0.33 * Math.sin(1.16))]}
        rotation={[-Math.PI / 2, 0, -1.16]}
        distanceFactor={0.2}
      >
        <Name visible={props.currentSection == SceneSection.NAME}/>
      </Html>
      <Html
        wrapperClass="html_wrapper"
        transform
        position={[0.7, 1.231, 1.3]} 
        rotation={[0, -Math.PI, 0]} 
        distanceFactor={0.4}
      >
        <Projects currentProjectId={props.currentProjectId} />
      </Html>
      <Html wrapperClass="html_wrapper" fullscreen zIndexRange={[100, 0]}>
        <div className={`vignette ${props.currentProjectId > -1 ? "visible" : ""}`} />
      </Html>
    </>
  )
}

export default HtmlMeshOverlay