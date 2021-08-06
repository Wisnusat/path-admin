/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { base_url, team_image_url } from "../../config";
import axios from 'axios';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';
import React from 'react';

// const data = [
//   {
//     id: 1,
//     imgSrc: Member1,
//     altText: 'Barlian Henryranu',
//     title: 'Barlian Henryranu',
//     designation: 'S3 Bio-informatics & Sytem designer',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 2,
//     imgSrc: Member2,
//     altText: 'Edita Rosana ',
//     title: 'Edita Rosana ',
//     designation: 'S3 Bio-informatics & Sytem designer',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 3,
//     imgSrc: Member3,
//     altText: 'Caesaredi Rama',
//     title: 'Caesaredi Rama',
//     designation: '#',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 4,
//     imgSrc: Member4,
//     altText: 'dr. Mustika Dian',
//     title: 'dr. Mustika Dian',
//     designation: '#',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 5,
//     imgSrc: Member2,
//     altText: 'Intan Purbowati',
//     title: 'Intan Purbowati',
//     designation: '#',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 6,
//     imgSrc: Member6,
//     altText: 'Anonym',
//     title: 'Anonym',
//     designation: 'Web Designer',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       // {
//       //   id: 3,
//       //   name: 'instagram',
//       //   path: '#',
//       //   icon: <FaInstagram />,
//       // },
//     ],
//   },
// ];

export default class TeamSection extends React.Component {
constructor(){
  super()
  this.state = {
    team: [],
    action: "",
    id_team: "",
    nama: "",
    imgSrc: "",
    jabatan: "",
    social_media: "",
    uploadFile: true,
  }
}

getTeam = () => {
  let url = "http://localhost:5000/team"
  axios.get(url)
  .then(response=> {
      this.setState({team: response.data.team})
      console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

componentDidMount(){
  this.getTeam()
}

 render (){
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          { this.state.team.map((item) => (
            <TeamCard
              key={`team--key${item.id_team}`}
              src={ team_image_url + "/" + item.imgSrc}
              // altText={item.altText}
              title={item.nama}
              designation={item.jabatan}
              // social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};

