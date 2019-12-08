// importei react-navigation react-native-gesture-handler react-native-reanimated
// a primeira é para rotas, a segunda é para os gestos para fazer ao troca de páginas a terceira
// é as animações em troca de pages.
//  para android teremos que colocar algumas coisas a mais,
// dentro do arquivo mainactivity.java teremos que botar algumas linhas de código
// disponivel aqui https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html
// depois de fazer isso teremos que fazer o yarn react-native run-andoid e cd ios -> pod install
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';
import Repositories from './pages/Repositories';

// o create App container é similar o browser router
// o createstacknavigator é um tipo de configuração de rota, ele
// tem vários tipos de configuração de rota depois experimentar.
const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repositories,
    },
    {
      // em android o default disso abaixo é left
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f21349',
        },
        headerTintColor: '#ffff',
      },
    }
  )
);

export default Routes;
