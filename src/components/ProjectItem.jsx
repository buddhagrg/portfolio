'use client';

import { Card, Col } from "react-bootstrap";
import { BsGithub, BsFillRocketTakeoffFill } from "react-icons/bs";

export default function ProjectItem({ title, subtitle, code, demo, stack }) {
    return (
        <Col lg={6} sm={12} className="mb-4">
            <Card className="project-item h-100">
                <Card.Body>
                    <h4>{title}</h4>
                    <p className="my-4">{subtitle}</p>
                    <div className="project-stack">Stack: {` `}{stack}</div>
                    <div className="d-flex">
                        <a className="project-link" href={code}>
                            <BsGithub />
                        </a>
                        <a className="project-link" href={demo}>
                            <BsFillRocketTakeoffFill style={{ marginLeft: '20px' }} />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}