import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'

import { StyledFooter } from './styles'

const Footer = () => (
  <StyledFooter>
    <Link to={'/'}>
      <img src={logo} alt="logo" />
    </Link>

    <ul>
      <li>
        <img src={instagram} alt="instagram" />
      </li>
      <li>
        <img src={facebook} alt="facebook" />
      </li>
      <li>
        <img src={twitter} alt="twitter" />
      </li>
    </ul>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </StyledFooter>
)

export default Footer
