import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_1480}>
        <View style={styles.View_I2_1480_2_5}>
          <View style={styles.View_I2_1480_2_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ce/23d5/d16c03c99c1fae9f60819828d91ba01b"
            }}
            style={styles.ImageBackground_I2_1480_2_7}
          />
          <View style={styles.View_I2_1480_2_8} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4eb/14fd/690fbcf5e50e1896c8119167d0f0c942"
          }}
          style={styles.ImageBackground_I2_1480_2_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abac/2e1a/5d8b536c9ab5d490253b310770c330fe"
          }}
          style={styles.ImageBackground_I2_1480_2_13}
        />
        <View style={styles.View_I2_1480_2_18}>
          <View style={styles.View_I2_1480_2_19}>
            <Text style={styles.Text_I2_1480_2_19}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1481}>
        <View style={styles.View_I2_1481_2_45} />
      </View>
      <View style={styles.View_2_1482}>
        <View style={styles.View_I2_1482_2_111} />
        <View style={styles.View_I2_1482_2_112}>
          <View style={styles.View_I2_1482_2_113}>
            <Text style={styles.Text_I2_1482_2_113}>Verification</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec92/e23a/367f7cf29079f74c11987eeb9eac3311"
            }}
            style={styles.ImageBackground_I2_1482_2_114}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1483}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1418"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34aa/ac16/15579b3f302ae0317571dfb8c4d3dd9a"
          }}
          style={styles.ImageBackground_I2_1483_0_2673}
        />
        <View style={styles.View_I2_1483_0_2674}>
          <Text style={styles.Text_I2_1483_0_2674}>Verify</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_1484}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1a2/ef72/a72b78daa7b6dff9bbe75fe9e7537c4a"
          }}
          style={styles.ImageBackground_I2_1484_71_6545}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d92/13b7/15e9aefdfbc2dd9840c97940b7126ee7"
          }}
          style={styles.ImageBackground_I2_1484_71_6546}
        />
      </View>
      <View style={styles.View_2_1485}>
        <Text style={styles.Text_2_1485}>
          Please type the verificarion code sent to (+88) 123456789
        </Text>
      </View>
      <View style={styles.View_2_1486}>
        <View style={styles.View_2_1487}>
          <View style={styles.View_2_1488}>
            <Text style={styles.Text_2_1488}>1</Text>
          </View>
        </View>
        <View style={styles.View_2_1489}>
          <View style={styles.View_2_1490}>
            <Text style={styles.Text_2_1490}>1</Text>
          </View>
        </View>
        <View style={styles.View_2_1491}>
          <View style={styles.View_2_1492}>
            <Text style={styles.Text_2_1492}>1</Text>
          </View>
        </View>
        <View style={styles.View_2_1493}>
          <View style={styles.View_2_1494}>
            <Text style={styles.Text_2_1494}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1495}>
        <View style={styles.View_I2_1495_2_217}>
          <View style={styles.View_I2_1495_2_218}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f053/3dc5/8f84273e01bf3faefa634038f35980aa"
              }}
              style={styles.ImageBackground_I2_1495_2_219}
            />
            <View style={styles.View_I2_1495_2_220}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f053/3dc5/8f84273e01bf3faefa634038f35980aa"
                }}
                style={styles.ImageBackground_I2_1495_2_221}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38b9/c4be/90d30800b32cf5823afdfc7a977a262d"
                }}
                style={styles.ImageBackground_I2_1495_2_222}
              />
            </View>
          </View>
          <View style={styles.View_I2_1495_2_223}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d7f/2710/519fe9285696d607578676acc734fbe5"
              }}
              style={styles.ImageBackground_I2_1495_2_224}
            />
            <View style={styles.View_I2_1495_2_225}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d7f/2710/519fe9285696d607578676acc734fbe5"
                }}
                style={styles.ImageBackground_I2_1495_2_226}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/009a/c989/c8c14755b5a39c96d93f0005cc987b42"
                }}
                style={styles.ImageBackground_I2_1495_2_227}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I2_1495_2_228}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/378b/88c3/0890a04bf84c68c5817346a8d9519782"
            }}
            style={styles.ImageBackground_I2_1495_2_229}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/378b/88c3/0890a04bf84c68c5817346a8d9519782"
            }}
            style={styles.ImageBackground_I2_1495_2_230}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c14f/39a9/867d640358ecc41ed82b7151b42882f9"
            }}
            style={styles.ImageBackground_I2_1495_2_231}
          />
        </View>
        <View style={styles.View_I2_1495_2_232}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6860/646a/fec7db02b42ea23ee5636199eb465569"
            }}
            style={styles.ImageBackground_I2_1495_2_233}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6860/646a/fec7db02b42ea23ee5636199eb465569"
            }}
            style={styles.ImageBackground_I2_1495_2_234}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d985/a53d/c8c80d8cd93bebeca744487f55800fce"
            }}
            style={styles.ImageBackground_I2_1495_2_235}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(13, 13, 15, 1)" },
  View_2: { height: hp("115%") },
  View_2_1480: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1480_2_5: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I2_1480_2_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I2_1480_2_7: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_1480_2_8: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I2_1480_2_9: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  ImageBackground_I2_1480_2_13: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  View_I2_1480_2_18: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1480_2_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1480_2_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_1481: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1481_2_45: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_1482: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1482_2_111: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I2_1482_2_112: {
    flexGrow: 1,
    width: wp("55%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1482_2_113: {
    width: wp("39%"),
    minWidth: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1482_2_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_1482_2_114: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_2_1483: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1483_0_2673: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_1483_0_2674: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_1483_0_2674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1484: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1484_71_6545: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1484_71_6546: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_2_1485: {
    width: wp("73%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_2_1485: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1486: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("75%")
  },
  View_2_1487: {
    width: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)",
    overflow: "hidden"
  },
  View_2_1488: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1489: {
    width: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)",
    overflow: "hidden"
  },
  View_2_1490: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1490: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1491: {
    width: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)",
    overflow: "hidden"
  },
  View_2_1492: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1493: {
    width: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)",
    overflow: "hidden"
  },
  View_2_1494: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1495: {
    width: wp("69%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1495_2_217: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_1495_2_218: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1495_2_219: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I2_1495_2_220: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1495_2_221: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I2_1495_2_222: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1495_2_223: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1495_2_224: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I2_1495_2_225: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1495_2_226: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I2_1495_2_227: {
    width: wp("69%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1495_2_228: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_1495_2_229: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I2_1495_2_230: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I2_1495_2_231: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1495_2_232: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_1495_2_233: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I2_1495_2_234: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I2_1495_2_235: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
