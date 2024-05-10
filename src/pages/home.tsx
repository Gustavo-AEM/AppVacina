import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import{Ionicons} from'@expo/vector-icons'


const Tab = createBottomTabNavigator();
import Info from './Informações';
import Inicio from './Inicio';
import Carteira from './CriarCarteiras'

export default function Home(){
    return(
        <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon:({focused,size,color})=>{
              if(focused){
                  return<Ionicons size={size} color={color} name='home'/>
              }else
              {return<Ionicons size={size} color={color} name='home-outline'/>}
          }
          }}
          name='inicio'
          component={Inicio}
          />
          <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon:({focused,size,color})=>{
              if(focused){
                  return<Ionicons size={size} color={color} name='add'/>
              } else
              {return<Ionicons size={size} color={color} name='add-outline'/>}
          }
          
          }}
          name='CriarCarteiras'
          component={Carteira}
          />
                  <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon:({focused,size,color})=>{
              if(focused){
                  return<Ionicons size={size} color={color} name='book'/>
               } else
              {return<Ionicons size={size} color={color} name='book-outline'/>}
          }
          }}
          name='Informações'
          component={Info}
          />
        </Tab.Navigator>
    )
}