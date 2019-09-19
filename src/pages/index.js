import React, { useState } from "react"

import styled from "styled-components"

import SEO from "../components/seo"

import "../styles/minireset.css"
import "./index.css"

import BatIcon from "../images/icons/bat.svg"
import ZrxIcon from "../images/icons/zrx.svg"
import DgdIcon from "../images/icons/dgd.svg"
import EthIcon from "../images/icons/eth.svg"
import MkrIcon from "../images/icons/mkr.svg"
import OmgIcon from "../images/icons/omg.svg"
import RepIcon from "../images/icons/rep.svg"
import UsdcIcon from "../images/icons/usdc.svg"
import WbtcIcon from "../images/icons/wbtc.svg"
import EmptyIcon from "../images/icons/empty.svg"

import Cross from "../images/cross.svg"
import Minus from "../images/minus.svg"
import { Helmet } from "react-helmet"

const Hero = styled.div`
  color: #1e2e3a;
  font-size: 38px;
  margin-top: 97px;
`

const Cards = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px auto;
  
  @media (max-width: 980px) {
    max-width: 300px;
  }
`

const Card = styled.div`
    overflow: hidden;
    border-radius: 15px;
    width: 300px;
    height: 355px;
    color: #ffffff;
    position: relative;
    
    @media (max-width: 980px) {
      margin-bottom: 35px;
    }
  
    .title {
      font-size: 29px;
      margin-top: 58px;
    }

    .description {
      font-size: 17px;
      line-height: 25px;
      margin-top: 27px;
      margin-right: 23px;
      margin-left: 23px;
    }

    .buttonContainer {
      position: absolute;
      bottom: 44px;
      width: 100%;
    }

    .button {
      padding-right: 22px;
      padding-left: 22px;
      border-radius: 6px;
      display: inline-block;
      font-size: 15px;
      font-weight: 500;
      height: 39px;
      line-height: 34px;
      text-decoration: none;
    }
    
    a:hover {
      opacity: 0.85;
    }
  `

const BlueBackground = props => {
  const Container = styled.div`
    background: #3b7ea6;
    box-shadow: 0px 1px 3px rgba(211, 211, 211, 0.25);
    position: relative;
    overflow: hidden;
  `

  const Circle = styled.div`
    width: 217px;
    height: 217px;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.3;
    border-radius: 109px;

    position: absolute;
    left: 150px;
    top: 215px;
  `

  return (
    <Container {...props}>
      <Circle />
    </Container>
  )
}

const TextSection = styled.div`
  margin-top: 81px;

  h3 {
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 20px;
  }

  p {
    max-width: 580px;
    margin: 0 auto;
    font-size: 19px;
    line-height: 28px;
  }
`

const tokens = [
  {
    name: "Ethereum",
    icon: EthIcon,
  },
  {
    name: "Wrapped Bitcoin",
    icon: WbtcIcon,
  },
  {
    name: "USD Coin",
    icon: UsdcIcon,
  },
  {
    name: "OmiseGO",
    icon: OmgIcon,
  },
  {
    name: "Augur",
    icon: RepIcon,
  },
  {
    name: "0x",
    icon: ZrxIcon,
  },
  {
    name: "Digix Gold Token",
    icon: DgdIcon,
  },
]

const TokenList = styled.div`
  max-width: 978px;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  flex-wrap: wrap;
  margin: 43px auto;
  
  @media (max-width: 1000px) {
    max-width: 560px;
  }
`

const Token = ({ name, icon }) => {
  const Icon = icon || EmptyIcon
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "20px 15px" }}>
      <Icon width="22" height="22" style={{flexGrow: 0, flexShrink: 0}}/>
      <span style={{ fontSize: "15px", lineHeight: "22px", marginLeft: "13px", flexGrow: 0, flexShrink: 0 }}>
        {name}
      </span>
    </div>
  )
}

const Questions = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const questions = [
    {
      q: "What is Oasis?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
    {
      q: "How secure is Oasis?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
    {
      q: "Do I need an account to use Oasis?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
    {
      q: "How do I borrow Dai?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
    {
      q: "How do I trade my tokens?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
    {
      q: "Does Oasis charge fees?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
    {
      q: "How can I exchange fiat to Dai?",
      a:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis.",
    },
  ]

  return questions.map(({ q, a }, index) => {
    const isSelected = index === selectedIndex
    const Question = ({isSelected, index, children}) => {
      const Icon = isSelected ? Minus : Cross
      return (
        <div
          style={{ cursor: "pointer", marginRight: "25px" }}
          onClick={() => setSelectedIndex(isSelected ? null : index)}
        >
          {children}
          <Icon style={{ position: "absolute", right: "4px", top: "16px" }} />
        </div>
      )
    }
    return (
      <div
        style={{
          maxWidth: "632px",
          margin: "0 auto",
          textAlign: "left",
          fontSize: "18px",
          lineHeight: "25px",
        }}
        key={q}
      >
        <div
          style={{
            paddingTop: "14px",
            paddingBottom: "18px",
            letterSpacing: "0.007em",
            position: "relative",
          }}
        >
          <Question isSelected={isSelected} index={index}>{q}</Question>
        </div>
        {isSelected ? (
          <div
            style={{
              fontSize: "17px",
              paddingBottom: "21px",
              opacity: 0.6,
            }}
          >
            {a}
          </div>
        ) : null}
        {index < questions.length - 1 ? (
          <div style={{ borderBottom: "1px solid #9E9E9E", opacity: 0.9 }} />
        ) : null}
      </div>
    )
  })
}

const Header = styled.header`
  text-align: left;

  span {
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.3px;
    font-weight: 500;
  }
`

const Nav = styled.nav`
  float: right;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 17px;
    text-decoration: none;
    color: black;
    margin-left: 64px;
  }
`

const IndexPage = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1203,
      paddingTop: "41px",
    }}
  >
    <SEO title="Oasis" />
    <Helmet>
      <link rel="preload" href="/fonts/fonts.css" as="style" />
    </Helmet>
    <Header>
      <span>Oasis</span>
    </Header>
    <Hero>Trade, borrow and save using Dai.</Hero>
    <Cards>
      <Card>
        <BlueBackground
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
          }}
        />
        <div className="title">Trade</div>
        <div className="description">
          The most secure way to trade.
          Wallet to wallet token trading.
          Decentralized leverage.
        </div>
        <div className="buttonContainer">
          <a href="https://oasis.app/trade" className="button" style={{color: "black", backgroundColor: "white"}}>
            Start Trading
          </a>
        </div>
      </Card>
      <Card style={{
        background: "linear-gradient(0deg, #ed9d52, #ed9d52)",
        boxShadow: "0px 1px 11px #E6F1F4",
      }}>
        <div className="title">Borrow</div>
        <div className="description">
          Lock your tokens to borrow Dai, a decentralized cryptocurrency pegged to the value of 1 USD.
        </div>
        <div className="buttonContainer">
          <div className="button" style={{backgroundColor: "#C37F47"}}>Coming Soon</div>
        </div>
      </Card>
      <Card style={{ background: "#d2f0eb", color: "#7e908c", marginBottom: 0 }}>
        <div className="title">Save</div>
        <div className="description">
          Earn savings on your Dai by locking it into a Maker Vault. Automatic and non-custodial.
        </div>
        <div className="buttonContainer">
          <div className="button" style={{backgroundColor: "#c5e3de"}}>Coming Soon</div>
        </div>
      </Card>
    </Cards>
    <TextSection style={{ marginTop: "103px" }}>
      <h3>Supported Tokens</h3>
      <TokenList>
        {tokens.map(({ name, icon }) => (
          <Token name={name} icon={icon} key={name} />
        ))}
      </TokenList>
    </TextSection>
    <TextSection style={{ marginTop: "108px" }}>
      <h3>What's the Story</h3>
      <p>
        Oasis is a platform for decentralized finance. Use it to trade tokens, borrow Dai and earn savings — all in one place.
      </p>
    </TextSection>
    <TextSection>
      <h3>Secure protocol built on Ethereum</h3>
      <p>
        Oasis is built on top of formally verified smart contracts created by
        The Maker Foundation, the industry leader in secure decentralized
        finance.
      </p>
    </TextSection>
    <TextSection>
      <h3>Completely Permissionless</h3>
      <p>
        Anyone can access the system simply by using a wallet address, and you never have to trust a counterparty institution to approve your activity.
      </p>
    </TextSection>
    <TextSection>
      <h3>Questions</h3>
      <Questions />
    </TextSection>
    <footer>
      © {new Date().getFullYear()} Maker Ecosystem Growth Holdings, Inc.
      <Nav>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </Nav>
    </footer>
  </div>
)

export default IndexPage
