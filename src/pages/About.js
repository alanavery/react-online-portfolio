import resume from '../documents/Alan_Avery_Resume.pdf';

const About = () => {
  return (
    <div className="div-about-page">
      <img
        src="https://res.cloudinary.com/alanavery/image/upload/v1609287001/about/IMG_0896_kfb4mw.jpg"
        alt="Alan Avery"
      />
      <div className="div-about-text text-body">
        <h2>
          36 years old. Native Midwesterner. Lover of art, design, and all things unique and pretty.
          Always looking for new opportunities to flex my creative muscles.
        </h2>
        <p>
          And without further ado, here are a few things I've learned from my years as a designer:
        </p>
        <p>(One) When asked to develop two to three looks, deliver four.</p>
        <p>
          (Two) Magazines are an excellent cure for designer’s block, as are trips to
          Williams-Sonoma.
        </p>
        <p>
          (Three) A clean desktop is a must. (I’m referring to both my computer desktop and the
          actual top of my desk.)
        </p>
        <p>
          (Four) Keep your desk drawer stocked with food; there's no guarantee you'll get to take a
          lunch break today. Or tomorrow.
        </p>
        <p>
          (Five) If it doesn’t make sense, it’s no good. Even if it took you six hours to
          illustrate.
        </p>
        <p>
          (Six) Make friends with everyone in the IT department and the guy in the copy room. In
          fact, consider giving them all a bottle of their favorite whiskey.
        </p>
        <p>(Seven) It’s okay to use the f-word.</p>
        <p className="resume">
          <a href={resume} target="_return">
            Click here for my resume.
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
