import React from 'react'
import './styles/Card.css'
import circlesImg from '../images/circles.png'
class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: 'https://vignette.wikia.nocookie.net/shingeki-no-kyojin/images/e/ea/Eren_Jaeger_-_Anime.png/revision/latest/scale-to-width-down/270?cb=20190429004402&path-prefix=es'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                image: "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"

            })
        }, 5000)
    }

    render() {
        const {title, description, img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            
            >
                <div className = "card-body">
                    <div className="row center">
                        <div className = "col-6">
                            <img src={this.state.image} className="float-right"/>
                        </div>

                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card