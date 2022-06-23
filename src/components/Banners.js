import { SimpleGrid } from '@mantine/core';

function Banner() {
  return (
    <SimpleGrid cols={2} style={{ padding:'30px' }}>
      <div><img src='../assets/img1.jpeg' alt='img1' height={439} width={713} /></div>
      <div><img src='../assets/img2.jpeg' alt='img2' height={439} width={713}/></div>
      <div><img src='../assets/img3.jpeg' alt='img3' height={439} width={713}/></div>
      <div><img src='../assets/img4.jpeg' alt='img4' height={439} width={713}/></div>
    </SimpleGrid>
  )
}

export default Banner;