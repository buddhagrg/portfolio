import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ProfileImg from "../../assets/profile-img.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GITHUB_LINK, LINKEDIN_LINK } from "../data";

export default function Hero() {
    return (
        <Row className="hero-container">
            <Col lg={{ span: 8, order: 0 }} xs={{ span: 12, order: 1 }} className="text-left text-md-start">
                <h4 className="my-4">Hi, I'm Buddha</h4>
                <p>
                    I'm a software engineer specializing in ReactJs. I have passion for building interactive interfaces
                    that are beautiful and functional for wide range of users.
                </p>
                <div className="d-flex">
                    <a className="social-link" href={LINKEDIN_LINK}>
                        <BsLinkedin />
                    </a>
                    <a className="social-link" href={GITHUB_LINK}>
                        <BsGithub />
                    </a>
                </div>
            </Col>
            <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 0 }} className="text-center text-md-right">
                <Image
                    src={ProfileImg}
                    className="hero-img"
                    placeholder="blur"
                    alt="Profile"
                />
            </Col>
        </Row>
    );
}