import ProjectItem from "@/components/ProjectItem";
import { getProjectMetadata } from "@/util"
import { Row } from "react-bootstrap";

export default function Projects() {
    const projects = getProjectMetadata();
    return (
        <Row>
            {projects.map(project => <ProjectItem key={project.title} {...project} />)}
        </Row>
    );
}