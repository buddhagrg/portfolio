import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ProfileImg from "../../assets/profile-img.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GITHUB_LINK, LINKEDIN_LINK, RESUME_DOCS_LINK, WORK_EMAIL_LINK } from "../data";

export default function Hero() {
    return (
        <Row className="hero-container">
            <Col xs={12}>
                <Image
                    src={ProfileImg}
                    className="hero-img"
                    placeholder="blur"
                    alt="Profile"
                />
            </Col>
            <Col>
                <h4 className="mt-5 mb-3">Buddha Gurung</h4>
                <p>
                    I'm a software engineer specializing in building interactive interfaces
                    that are beautiful and functional for wide range of users using Javascript and ReactJS.
                </p>

                <p className="hero-mail-link">If you would like to collaborate, please <a href={`mailto:${WORK_EMAIL_LINK}`}>send me an email</a> or reach out on any of my social handles.</p>
                <div className="d-flex">
                    <a className="social-link" href={LINKEDIN_LINK}>
                        <BsLinkedin />
                    </a>
                    <a className="social-link" href={GITHUB_LINK}>
                        <BsGithub />
                    </a>
                </div>
                <div className="resume-link">
                    <a href={RESUME_DOCS_LINK} target="_blank">View Resume</a>
                </div>
            </Col>
        </Row>
    );
}