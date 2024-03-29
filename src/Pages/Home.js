import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomerBar from '../components/CustomerBar';
import HeroImage from '../components/HeroImage';
import happyPicture from '../img/happy.jpg';

const customers = [
    { name: "klant 1", logo : happyPicture },
    { name: "klant 2", logo : happyPicture },
    { name: "klant 3", logo : happyPicture },
    { name: "klant 4", logo : happyPicture },
    { name: "klant 5", logo : happyPicture },
    { name: "klant 6", logo : happyPicture },
    { name: "klant 7", logo : happyPicture },
    { name: "klant 8", logo : happyPicture },
]

const Home = () => {
    return (
        <div>
            <HeroImage />
            <Container>
                <Row>
                    <div className="col-12 mt-3">
                        <h1 className="text-center">Wat doen wij</h1>
                        <p>
                            Korte introductietekst over wat het bedrijf precies doet. Niet te veel uitweiden, want er moet ook nog wat overblijven voor de "Over ons" pagina.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper mollis dui, sit amet varius risus feugiat et. Integer consequat, diam et scelerisque euismod, nunc neque condimentum nibh, congue cursus risus justo nec eros. Pellentesque ac lacus elementum enim dictum maximus. Morbi nec erat a lectus varius pellentesque et eget eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et vulputate enim. Pellentesque lobortis magna risus, sit amet euismod diam congue a. Cras lacinia nulla et odio ullamcorper, blandit suscipit lacus pharetra. Suspendisse mattis tortor ut varius tristique. Sed posuere urna libero, ut tempus purus iaculis eget. Nam ut ultricies justo, in blandit felis. Ut tellus tellus, malesuada eu mauris condimentum, efficitur varius tortor.
                            Donec sit amet pellentesque libero. Nunc rutrum lorem libero, et tincidunt enim luctus vel. Sed a neque a mauris vestibulum ultrices. Ut ipsum lorem, ultrices at elit non, ornare convallis ante. Duis hendrerit efficitur massa et suscipit. Sed ullamcorper ullamcorper nunc, in lobortis leo vestibulum et. Vivamus vitae quam pretium leo dapibus rutrum. Nunc orci mi, tempor nec metus sit amet, interdum vehicula sem. Pellentesque varius dui pretium ipsum tincidunt sagittis. Sed nec lorem congue, rutrum erat eget, sagittis nisl. Donec non consequat nulla, ac dictum sem. Sed non lacus vel leo condimentum gravida vitae vitae ante.
                            Nulla consequat mauris quis lectus mollis, ut suscipit quam euismod. Phasellus suscipit ornare arcu, vel ullamcorper odio porttitor id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin eget nisi augue. Proin et pulvinar odio, eget pellentesque ipsum. Suspendisse potenti. Nam tellus enim, lacinia ornare condimentum in, pretium sit amet nulla. Nam sed dapibus nisl, at tincidunt quam. Sed faucibus mauris ac elit vehicula, vitae egestas tortor pharetra. Quisque vitae faucibus lorem, at efficitur nibh. Ut in mi gravida, tincidunt lacus vitae, mattis turpis. Nullam aliquam vel elit eget faucibus.
                            Aenean sed odio sit amet elit dignissim tristique ac eu ipsum. Phasellus molestie facilisis metus eget luctus. Nullam sit amet mi turpis. Phasellus interdum, dui vitae feugiat elementum, nibh nibh tincidunt diam, a congue lacus nulla a lacus. Integer efficitur in ipsum ut aliquet. Pellentesque eleifend at lectus nec scelerisque. Aliquam convallis lacus ut turpis euismod ornare. Praesent sodales auctor accumsan. Nunc quis justo risus. Vivamus dictum ex turpis, ac semper tellus laoreet vitae. Curabitur ut ex molestie, sodales neque at, bibendum justo.
                            Mauris vehicula ante a placerat sagittis. Sed elementum, mauris ut sagittis ultrices, tellus nibh accumsan tortor, in molestie neque tortor vitae est. Nunc dignissim lobortis nisi quis viverra. Sed pulvinar sem ut iaculis interdum. Praesent varius urna pretium elit facilisis euismod. Nunc ac magna mauris. Pellentesque sit amet tincidunt neque. Nullam sagittis tempus commodo. Nam quis turpis ac urna vestibulum finibus id et mi. Donec euismod scelerisque consequat.             
                        </p>
                    </div>
                    <div className="col-12 mt-3">
                        <h1 className="text-center">Iets over tevreden klanten wellicht?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper mollis dui, sit amet varius risus feugiat et. Integer consequat, diam et scelerisque euismod, nunc neque condimentum nibh, congue cursus risus justo nec eros.
                        </p>
                    </div>
                    <CustomerBar 
                        customerList={customers}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Home;