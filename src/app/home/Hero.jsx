import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ProfileImg from "../../assets/profile.jpg";
import HeroImg from "../../assets/hero-img.jpg";

export default function Hero() {
    return (
        <Row className="hero-container">
            <Col lg={{ span: 8, order: 0 }} xs={{ span: 12, order: 1 }} className="text-center text-md-start">
                <h4 className="my-4">Hi, I'm Buddha</h4>
                <p>I'm a software engineer specializing in ReactJs.</p>
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