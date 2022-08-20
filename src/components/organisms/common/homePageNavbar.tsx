import Navbar from '../../molecules/common/navbar'
import AccountMenu from './accountMenu'
import InformationMenu from './informationMenu'
import SiteLogo from './siteLogo'

type PropsHomePageNavbar = {
  isFloat?: boolean
}

export default function HomePageNavbar(props: PropsHomePageNavbar) {
  return (
    <Navbar
      isFloat={props.isFloat}
      siteLog={<SiteLogo />}
      pathHome={'#'}
      components={[<InformationMenu key={0} />, <AccountMenu key={1} />]}
    />
  )
}
