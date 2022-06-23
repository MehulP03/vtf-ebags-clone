import { SimpleGrid , Text} from '@mantine/core';

function LimitedDeals() {
  return (
    <SimpleGrid cols={3} style={{ padding:'50px' }}>
      <div><img src='../assets/img5.png' alt='img1' height={263} width={427} />
      <Text style={{fontSize: '20px', color: '#5f739f'}}><a href='/' style={{textDecoration: 'none'}}>Luxon Travel Backpack</a></Text>
      <Text style={{fontSize: '16px'}}>Now only  $109.99</Text>
      <Text style={{color: '#5f739f'}}><a href='/'>Shop Now</a></Text></div>
      <div><img src='../assets/img6.png' alt='img2' height={263} width={427}/>
      <Text style={{fontSize: '20px', color: '#5f739f'}}><a href='/' style={{textDecoration: 'none'}}>CTS Daypack</a></Text>
      <Text style={{fontSize: '16px'}}>Now only  $69.99</Text>
      <Text style={{color: '#5f739f'}}><a href='/'>Shop Now</a></Text>
      </div>
      <div><img src='../assets/img7.png' alt='img3' height={263} width={427}/>
      <Text style={{fontSize: '20px', color: '#5f739f'}}><a href='/'  style={{textDecoration: 'none'}}>Pro Slim Series</a></Text>
      <Text style={{fontSize: '16px'}}>Now only  $59.99</Text>
      <Text style={{color: '#5f739f'}}><a href='/'>Shop Now</a></Text>
      </div>
      </SimpleGrid>
  )
}

export default LimitedDeals;