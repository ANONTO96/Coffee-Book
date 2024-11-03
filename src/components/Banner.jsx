import img from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div
  className="hero h-[650px] rounded-2xl"
  style={{
    backgroundImage: `url(${img})`
  }}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div>
      <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Hello there <br /> <br /> <br /> <br /> Explore different varieties of coffees</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;