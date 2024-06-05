import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./Images/alexa.png";
import CortanaImage from "./Images/cortana.png";
import SiriImage from "./Images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      {/* <div>Personal Digital Assistant</div> */}

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa"
                image={AlexaImage}
                description="Alexa was create by Amazon and help u buy things"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={CortanaImage}
                description="Cortana was made by Microsoft"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri"
                image={SiriImage}
                description="Siri was made by Apple"
              />
            </div>
          </div>
        </section>
      </div>
      {/* <img src={AlexaImage} alt=""/>  */}
      {/* <img src={CortanaImage}alt=""/> */}
      {/* <img src={SiriImage} alt=""/> */}
    </div>
  );
}
export default App;
