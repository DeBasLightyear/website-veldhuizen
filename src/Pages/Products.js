import React from 'react';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import Card from '../components/Card';
import standInPicture from '../img/stand_in_picture2.jpg';

const getNewProduct = (name, description, picture) => {
    return { name, description, picture }
}

const products = [
    getNewProduct(
        "Stro",
        "Stro bestaat uit de droge bloeistengels van graanplanten. Bij het maaidorsen van graan blijven de plantenstengels met de uitgedorste aren achter op het land. Deze worden tot grote ronde balen opgerold of tot rechthoekige strobalen (stropakken) samengeperst. Ook wordt meer en meer stro ondergeploegd. Hooi is gedroogd gras.",
        standInPicture
        ),
    getNewProduct(
        "Hooi",
        "Hooi bestaat hoofdzakelijk uit gedroogd gras, maar er zitten ook andere planten in die tussen het gras groeien. Ook is er luzernehooi dat uit gedroogde luzerne bestaat. Hooi wordt gebruikt als voedsel voor dieren tijdens de winter of in droge perioden als er weinig grasgroei is. Vroeger werd het veel aan vee op boerderijen gevoerd, maar tegenwoordig veel meer aan de verschillende herbivoren die als huisdier, zoals paarden, schapen en geiten of in dierentuinen worden gehouden. Hooi wordt gemaakt door een weide te maaien en het gemaaide gras enige tijd te laten liggen om het te laten drogen in de zon. Wel moet het gras enkele malen geschud worden om het goed droog te krijgen.        Het drogestofgehalte van hooi is ongeveer 80%, terwijl gras een drogestofgehalte van 20% heeft.",
        standInPicture
    ),
    getNewProduct(
        "Kokos",
        "Een kokosnoot of klapper is eigenlijk geen noot maar een steenvrucht van de kokospalm, waarvan het mesocarp (het vruchtvlees) niet vlezig maar vezelig is. Daarbinnen zit het harde endocarp, dat het zaad omgeeft met drie duidelijk zichtbare kiemopeningen. Bij de kieming komt de kiem door een van deze openingen naar buiten. De drie kiemopeningen zijn de overblijfselen van de in aanleg uit drie vruchtbladen bestaande vrucht.",
        standInPicture
    ),
    getNewProduct(
        "Andere vormen van Co-Packaging",
        "A contract packager, or copacker, is a company that packages products for their clients. The packaging and labeling services can be used for many types of products including foods, pharmaceuticals, household products, and industrial products.",
        standInPicture
    )
];

const Products = () => {
    return (
        <div>
            <Jumbo 
                jumboBackground={"jumbotron-grain"}
                headerText={"Producten"}
            />
            <Layout>
                {products.map((item, index) =>
                        <Card 
                            title={item.name}
                            description={item.description}
                            picture={item.picture}
                            picturePosition={index % 2 === 0 ? 'right' : 'left'}
                        />
                    )}
            </Layout>
        </div>
    )
}

export default Products;