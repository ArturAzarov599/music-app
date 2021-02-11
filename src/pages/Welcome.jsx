import styled from 'styled-components';
import MusicTypes from '../components/MusicTypes';
import NewMusic from '../components/NewMucis';
import SpecialOffer from '../components/SpecialOffer';

const WelcomeContent = styled.article`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
`

const WelcomeTitle = styled.span`
    display: block;
    letter-spacing: 1px;
    font-size: 45px;
    text-align: center;
    font-style: oblique;
`

const WelcomeText = styled.p`
    margin-top: 10px;
    font-size:17px;
    text-align: center;
`

const Welcome = () => {
    return (
        <>
            <WelcomeTitle>Welcome to Cusotom Music App</WelcomeTitle>
            <WelcomeText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus corporis, nihil voluptas odio ea libero nobis blanditiis animi debitis id nostrum, quaerat optio alias rerum tenetur harum nulla quod.
            </WelcomeText>

            <WelcomeContent>
                <NewMusic />
                <NewMusic />
                <NewMusic />
            </WelcomeContent>

            <SpecialOffer />

            <MusicTypes />
        </>
    )
}

export default Welcome;