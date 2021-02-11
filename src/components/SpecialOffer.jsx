import styled from "styled-components";

import musicImage from "../images/bc03fcadd378b93dbf934bdbbce25b20.jpg"

const SpecialOfferBody = styled.article`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const SpecialOfferImage = styled.img`
    width:50%;
`

const SpecialOfferContent = styled.section`
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    padding: 10px;
`

const SpecialOfferContentTitle = styled.h2`
    text-align: center;
    display:flex;
    justify-content: space-between;
    width: 100%;
`

const SpecialOfferSubTitle = styled.span`
    color: gold;
`

const SpecialOfferDescription = styled.p`
    margin:10px 5px;
    font-size: 16px;
`

const SpecialOfferTable = styled.section`
    display: flex;
    justify-content: flex-end;
    font-size: 40px;
    width: 100%;
`

const SpecialOffer = () => {
    return (
        <SpecialOfferBody>
            <SpecialOfferImage src={musicImage} />
            <SpecialOfferContent>
                <SpecialOfferSubTitle>Special offer</SpecialOfferSubTitle>
                <SpecialOfferContentTitle>HD.440 BT<h5>new type of sound</h5></SpecialOfferContentTitle>
                <SpecialOfferDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, distinctio excepturi natus perferendis officia saepe, voluptas quaerat ipsum ducimus, expedita ipsa consectetur nobis consequuntur omnis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda dignissimos ipsum nostrum enim amet, odit error. Molestiae, neque perferendis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet debitis placeat corrupti reprehenderit, suscipit cum quam perspiciatis iure consectetur reiciendis quaerat cupiditate aspernatur veritatis minus magni eum voluptatibus voluptatum. Quis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates accusamus repudiandae quas pariatur optio corporis cumque vero inventore! Id esse maxime quia dolorem laudantium hic, voluptatibus vel rerum dolores? Culpa!
                </SpecialOfferDescription>
                <SpecialOfferTable><div>Table</div></SpecialOfferTable>
            </SpecialOfferContent>
        </SpecialOfferBody>
    )
}

export default SpecialOffer;