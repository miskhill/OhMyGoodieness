import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./socialFollow.css";

export class SocialFollow extends Component {
    render() {
        return (
            <div class="social-container" id="contact">
                  <h3 >Social Media Follow & Contact</h3>
              <a href="https://www.facebook.com/profile.php?id=100088339574937"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://instagram.com/ohmy_goodieness?igshid=YmMyMTA2M2Y="
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <div className="email social">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" onClick={() => window.location = 'mailto:ohmygoodieness1@gmail.com'}/>
                </div>
            </div>
          );
    }

}