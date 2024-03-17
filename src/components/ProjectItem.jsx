'use client';

import { Card, Col } from "react-bootstrap";
import { BsGithub, BsFillRocketTakeoffFill } from "react-icons/bs";

export default function ProjectItem({ title, subtitle, code, demo }) {
    return (
        <Col lg={6} sm={12} className="mb-2 mb-sm-4">
            <Card className="project-item">
                <Card.Body>
                    <h4>{title}</h4>
                    <p className="my-4">{subtitle}</p>
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