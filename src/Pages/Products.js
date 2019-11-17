import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbo from '../components/Jumbo';
import ProductCard from '../components/ProductCard';
import strawPicture from '../img/straw.jpg';
import hayPicture from '../img/grass_dry.jpg';
import coconutPicture from '../img/coconut.jpg';
import backgroundGrain from '../img/grain - Tomasz Filipek cropped.jpg';

const getNewProduct = (name, description, picture) => {
    return { name, description, picture }
}

const products = [
    getNewProduct(
        "Stro",
        "Stro bestaat uit de droge bloeistengels van graanplanten. Bij het maaidorsen van graan blijven de plantenstengels met de uitgedorste aren achter op het land. Deze worden tot grote ronde balen opgerold of tot rechthoekige strobalen (stropakken) samengeperst. Ook wordt meer en meer stro ondergeploegd. Hooi is gedroogd gras.",
        strawPicture
        ),
    getNewProduct(
        "Hooi",
        "Hooi bestaat hoofdzakelijk uit gedroogd gras, maar er zitten ook andere planten in die tussen het gras groeien. Ook is er luzernehooi dat uit gedroogde luzerne bestaat. Hooi wordt gebruikt als voedsel voor dieren tijdens de winter of in droge perioden als er weinig grasgroei is. Vroeger werd het veel aan vee op boerderijen gevoerd.",
        hayPicture
    ),
    getNewProduct(
        "Kokos",
        "Een kokosnoot of klapper is eigenlijk geen noot maar een steenvrucht van de kokospalm, waarvan het mesocarp (het vruchtvlees) niet vlezig maar vezelig is. Daarbinnen zit het harde endocarp, dat het zaad omgeeft met drie duidelijk zichtbare kiemopeningen. Bij de kieming komt de kiem door een van deze openingen naar buiten. De drie kiemopeningen zijn de overblijfselen van de in aanleg uit drie vruchtbladen bestaande vrucht.",
        coconutPicture
    ),
];

const mainProduct = getNewProduct(
        "Contract Packaging",
        "A contract packager, or copacker, is a company that packages products for their clients. The packaging and labeling services can be used for many types of products including foods, pharmaceuticals, household products, and industrial products.",
        strawPicture
    )

const Products = () => {
    return (
        <div>
            <Jumbo 
                jumboBackground={backgroundGrain}
                headerText={"Producten"}
            />
            <Container>
                <Row>
                    <ProductCard
                        title={mainProduct.name}
                        description={mainProduct.description}
                        fillWidth={true}
                    />
                    {products.map((item) =>
                            <ProductCard 
                                title={item.name}
                                description={item.description}
                                picture={item.picture}
                            />
                        )}
                </Row>
            </Container>
        </div>
    )
}

export default Products;