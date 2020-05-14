import React, {useState} from "react"
import { Link, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import LeafletMap from '../components/leafletmap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "react-modal";

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.90)",
    zIndex: '100' 
  },
  content: {
    position: "relative",
    top: "50px",
    left: "auto",
    right: "auto",
    bottom: "auto",
    width: "90%",
    maxWidth: "960px",
    margin: "32px auto",
    padding: '10px',
    border: "20px solid #292B3B"
  }
};

const IndexPage = ({data}) => {

  // Modal stuff.
  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="hero-image">
        <Img fluid={data.pork.childImageSharp.fluid}/>
      </div>
    </section>
    <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
    >
      <div>
        <Link 
          to='/'
          onClick={e => {
            e.preventDefault();
            closeModal();
          }}
          className='modal-button'   
        >
          Close
        </Link>
        <div className='modal-body'>
          <h4>TAKEAWAY SERVICES AVAILABLE - FOOD & WINE</h4>
          <p>In light of the PM’s news conference yesterday, we’ve decided to increase our takeaway services, starting from tonight (Tuesday 17th March).</p>

          <p>As of now, our full menu - pizza, pasta, and a la carte - is available to takeaway as well as the wine list. Orders are available from 5pm, Tuesday - Sunday, and if you can’t make it to us to collect, we’ll deliver locally as much as we can. To make an order, call us on 0131 441 7427. Payment can be made over the phone or cash on delivery.</p>

          <p>We’ve been feeding the Colinton community for 23 years, and you can count on us to look after you now, too. We're so grateful for any support in this difficult time.</p>

          <span>Take care, and keep safe.</span>
          <span>The Dantes team</span>
        </div>
      </div>
    </Modal>
    <div className="intro">
      <div className="container">
        
        <aside className="content">
          <h2>Modern Italian<br/>Cooking</h2>
          <p className="content__body">Dantes is a family run Italian restaurant in the heart of Colinton, Edinburgh. Our fully-licensed restaurant offers a great range of traditional Italian cuisine, a fantastic à la carte menu, and seasonal daily specials. We offer al fresco dining and can cater for any size of party, with a private dining area for parties up to eight people</p>
          <Link to="/takeaway" className="content__button" >View Menus</Link>
        </aside>
        <div className="gallery">
          <Img fluid={data.pastaPortrait.childImageSharp.fluid} className="img1"/>
          <Img fluid={data.pork.childImageSharp.fluid} className="img2"/>
          <Img fluid={data.scallops.childImageSharp.fluid} className="img3"/>
        </div>
      </div>
    </div>
    <section className="indexMenu">
      <div className="container">
        <aside className="content">
          <h2>Family Run Since <br/>1997</h2>
          <p className="content__body">From first opening its doors, Dante and Nancy Margiotta set out to create a warm, friendly restaurant where people could come and enjoy authentic Italian dishes and 22 years later we still stick to our roots but with a modern twist.</p>
          <Link to="/about" className="content__button" >More About Us</Link>
        </aside> 
      </div>
    </section>
    <section className="reservation">
      <Img fluid={data.wall1.childImageSharp.fluid} className="img4"/>
      <div className="overlay">
        <h2>Reservations</h2>
        <p>Please call the restaurant for <br/>reservations</p>
        <span>0131 441 7427</span>
      </div>
    </section>
    <section className="findUs container">
      <aside className="content">
        <h2>Where To Find <br/> Us</h2>
        <span className="content__address">48-50 Bridge Road
        Colinton, EH13 0LQ</span>
        <p className="content__body">Free parking available in front of the restaurant with bus links with services 10, 16 and 400</p>
        <a href="https://goo.gl/maps/FGipk86ehdi1Rmj47" rel="noreferrer" className="content__button" >Get Directions</a>
      </aside>
    </section>
    <section className="homeMap">
      {typeof window !== 'undefined' &&
        <LeafletMap/>
      }
    </section>
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "table.jpg" }) {
      ...fluidImage
    }
    chevron: file(relativePath: { eq: "chevron.png" }) {
      ...fluidImage
    }
    pastaPortrait: file(relativePath: { eq: "ling-dark.jpg" }) {
      ...fluidImage
    }
    pork: file(relativePath: { eq: "pork.jpg" }) {
      ...fluidImage
    }
    scallops: file(relativePath: { eq: "scallops.jpg" }) {
      ...fluidImage
    }
    wall1: file(relativePath: { eq: "wall1.jpg" }) {
      ...fluidImage
    }
    wall2: file(relativePath: { eq: "wall2.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
