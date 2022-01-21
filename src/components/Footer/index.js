import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
  DIV,
  Contract,
} from "./FooterElements";
import logo from "./logo.png"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>

          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo src={logo}/>
            <WebsiteRights>
              PsychPunks&copy; 2022
              <DIV>Not Affiliated with Larva Labs</DIV>
              <Contract>0x26582b17C733bBC60FA41c833c9D814FC9CC4B03</Contract>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="OpenSea">
                <FaTwitter />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
