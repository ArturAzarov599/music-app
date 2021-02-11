import styled from "styled-components";

import musicImage from "../images/bc03fcadd378b93dbf934bdbbce25b20.jpg"

const NewMusicItem = styled.section`
    flex: 0 0 32%;
    margin:0 5px;

    @media (max-width: 767px) {
        flex: 0 0 60%;
    }
`

const NewMusicTitle = styled.h2`
    text-align: center;
`

const NewMusicDescription = styled.p`
    margin: 10px 0;
    text-align: center;
`

const NewMusicImage = styled.img`
    width: 100%;
`

const ButtonWrapper = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(-40px);
`

const NewMusicButton = styled.button`
    background: goldenrod;
    padding:10px 30px;
    border:0;
`

const NewMusic = () => {
    return (
        <NewMusicItem>
            <NewMusicTitle>Music Title</NewMusicTitle>
            <NewMusicDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa hic delectus esse, quisquam minus.
            </NewMusicDescription>
            <NewMusicImage src={musicImage} />
            <ButtonWrapper>
                <NewMusicButton>Add</NewMusicButton>
            </ButtonWrapper>
        </NewMusicItem>
    )
}

export default NewMusic;