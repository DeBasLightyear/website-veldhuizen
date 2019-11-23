import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbo from '../components/Jumbo';
import ProductCard from '../components/ProductCard';
import PolaroidCard from '../components/PolaroidCard';
import strawPicture from '../img/straw.jpg';
import hayPicture from '../img/grass_dry.jpg';
import coconutPicture from '../img/coconut.jpg';
import rabbitPicture from '../img/bunny - Maria Tyutina_cropped_2.jpg';
import backgroundGrain from '../img/grain - Tomasz Filipek cropped.jpg';
import placeHolderPicture from '../img/stand_in_picture2.jpg';

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
    getNewProduct(
        "Konijnenvoer",
        "Linnaeus plaatste het konijn in 1758 als Lepus cuniculus in het geslacht Lepus, samen met Lepus timidus (sneeuwhaas), Lepus capensis (Kaapse haas) en Lepus brasiliensis (tapeti of Braziliaans konijn).[2] De Europese haas was Linnaeus toen nog onbekend en die is daarom op dat moment niet in het geslacht Lepus of ergens anders te vinden.[3] De naam 'cuniculus' ontleende Linnaeus aan diverse eerdere auteurs, door hem geciteerd (Conrad Gesner, Ulisse Aldrovandi, Jan Jonston en John Ray), die de naam als geslachtsnaam voor het konijn hadden gebruikt.",
        rabbitPicture
    )
];

const mainProduct = getNewProduct(
        "Contract Packaging",
        "A contract packager, or copacker, is a company that packages products for their clients. The packaging and labeling services can be used for many types of products including foods, pharmaceuticals, household products, and industrial products. There can be a variety of reasons for using contract packaging. A contract packager may have specialized equipment and expertise needed for a particular packaging operation. A contract packager carries the capital costs of packaging machinery and the personnel costs of packaging line workers. A manufacturer can focus on its core competencies and outsource packaging to a contract packager. There may be a temporary need for additional capacity: surge projects. Contract packagers often can be more flexible than a large corporation to schedule urgently needed production. A test market, promotion, or product modification may need a limited packaging run to produce products for evaluation. Primary packages can be sent to a contract packager for assembling Multi-packs or a Point of sale display.",
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
                    <div className="col-md-6">
                        <h1>{mainProduct.name}</h1>
                        <p>{mainProduct.description}</p>
                    </div>
                    <div className="col-md-6">
                        <PolaroidCard 
                            picture={placeHolderPicture}
                            title="Een algemeen voorbeeld van een product"
                        />
                    </div>
                    <div className="col-12">
                        <h3>Een aantal voorbeelden...</h3>
                    </div>
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