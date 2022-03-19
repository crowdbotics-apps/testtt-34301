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
      <View style={styles.View_233_5425}>
        <View style={styles.View_I233_5425_2_5}>
          <View style={styles.View_I233_5425_2_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ce/23d5/d16c03c99c1fae9f60819828d91ba01b"
            }}
            style={styles.ImageBackground_I233_5425_2_7}
          />
          <View style={styles.View_I233_5425_2_8} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4eb/14fd/690fbcf5e50e1896c8119167d0f0c942"
          }}
          style={styles.ImageBackground_I233_5425_2_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abac/2e1a/5d8b536c9ab5d490253b310770c330fe"
          }}
          style={styles.ImageBackground_I233_5425_2_13}
        />
        <View style={styles.View_I233_5425_2_18}>
          <View style={styles.View_I233_5425_2_19}>
            <Text style={styles.Text_I233_5425_2_19}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_233_5426}>
        <View style={styles.View_I233_5426_2_111} />
        <View style={styles.View_I233_5426_2_112}>
          <View style={styles.View_I233_5426_2_113}>
            <Text style={styles.Text_I233_5426_2_113}>Convert</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec92/e23a/367f7cf29079f74c11987eeb9eac3311"
            }}
            style={styles.ImageBackground_I233_5426_2_114}
          />
        </View>
        <View style={styles.View_I233_5426_2_115}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f8f/beba/b20b376d1b4e5ae92dfce0b9d99a4150"
            }}
            style={styles.ImageBackground_I233_5426_2_117}
          />
        </View>
      </View>
      <View style={styles.View_233_5427}>
        <View style={styles.View_I233_5427_2_1156}>
          <View style={styles.View_I233_5427_2_1157} />
          <View style={styles.View_I233_5427_2_1158}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd01/feab/dc921607a691dbdd7545f7f0f7d30caf"
              }}
              style={styles.ImageBackground_I233_5427_2_1159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d87/940b/d529db81354f8f4a546f6ef5eff53514"
              }}
              style={styles.ImageBackground_I233_5427_2_1163}
            />
            <View style={styles.View_I233_5427_2_1164}>
              <Text style={styles.Text_I233_5427_2_1164}>0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3295/1c4b/aac38a8eba9ee359bfaca065df5049d2"
              }}
              style={styles.ImageBackground_I233_5427_2_1165}
            />
            <View style={styles.View_I233_5427_2_1166}>
              <Text style={styles.Text_I233_5427_2_1166}>WXYZ</Text>
            </View>
            <View style={styles.View_I233_5427_2_1167}>
              <Text style={styles.Text_I233_5427_2_1167}>9</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3295/1c4b/aac38a8eba9ee359bfaca065df5049d2"
              }}
              style={styles.ImageBackground_I233_5427_2_1168}
            />
            <View style={styles.View_I233_5427_2_1169}>
              <Text style={styles.Text_I233_5427_2_1169}>TUV</Text>
            </View>
            <View style={styles.View_I233_5427_2_1170}>
              <Text style={styles.Text_I233_5427_2_1170}>8</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3295/1c4b/aac38a8eba9ee359bfaca065df5049d2"
              }}
              style={styles.ImageBackground_I233_5427_2_1171}
            />
            <View style={styles.View_I233_5427_2_1172}>
              <Text style={styles.Text_I233_5427_2_1172}>PQRS</Text>
            </View>
            <View style={styles.View_I233_5427_2_1173}>
              <Text style={styles.Text_I233_5427_2_1173}>7</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3295/1c4b/aac38a8eba9ee359bfaca065df5049d2"
              }}
              style={styles.ImageBackground_I233_5427_2_1174}
            />
            <View style={styles.View_I233_5427_2_1175}>
              <Text style={styles.Text_I233_5427_2_1175}>MNO</Text>
            </View>
            <View style={styles.View_I233_5427_2_1176}>
              <Text style={styles.Text_I233_5427_2_1176}>6</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3295/1c4b/aac38a8eba9ee359bfaca065df5049d2"
              }}
              style={styles.ImageBackground_I233_5427_2_1177}
            />
            <View style={styles.View_I233_5427_2_1178}>
              <Text style={styles.Text_I233_5427_2_1178}>JKL</Text>
            </View>
            <View style={styles.View_I233_5427_2_1179}>
              <Text style={styles.Text_I233_5427_2_1179}>5</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3295/1c4b/aac38a8eba9ee359bfaca065df5049d2"
              }}
              style={styles.ImageBackground_I233_5427_2_1180}
            />
            <View style={styles.View_I233_5427_2_1181}>
              <Text style={styles.Text_I233_5427_2_1181}>GHI</Text>
            </View>
            <View style={styles.View_I233_5427_2_1182}>
              <Text style={styles.Text_I233_5427_2_1182}>4</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d87/940b/d529db81354f8f4a546f6ef5eff53514"
              }}
              style={styles.ImageBackground_I233_5427_2_1183}
            />
            <View style={styles.View_I233_5427_2_1184}>
              <Text style={styles.Text_I233_5427_2_1184}>DEF</Text>
            </View>
            <View style={styles.View_I233_5427_2_1185}>
              <Text style={styles.Text_I233_5427_2_1185}>3</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d87/940b/d529db81354f8f4a546f6ef5eff53514"
              }}
              style={styles.ImageBackground_I233_5427_2_1186}
            />
            <View style={styles.View_I233_5427_2_1187}>
              <Text style={styles.Text_I233_5427_2_1187}>ABC</Text>
            </View>
            <View style={styles.View_I233_5427_2_1188}>
              <Text style={styles.Text_I233_5427_2_1188}>2</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d87/940b/d529db81354f8f4a546f6ef5eff53514"
              }}
              style={styles.ImageBackground_I233_5427_2_1189}
            />
            <View style={styles.View_I233_5427_2_1190}>
              <Text style={styles.Text_I233_5427_2_1190}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I233_5427_2_1191}>
          <View style={styles.View_I233_5427_2_1191_2_45} />
        </View>
      </View>
      <View style={styles.View_233_5428}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34aa/ac16/15579b3f302ae0317571dfb8c4d3dd9a"
          }}
          style={styles.ImageBackground_I233_5428_0_2673}
        />
        <View style={styles.View_I233_5428_0_2674}>
          <Text style={styles.Text_I233_5428_0_2674}> Convert</Text>
        </View>
      </View>
      <View style={styles.View_233_5429}>
        <View style={styles.View_233_5430}>
          <View style={styles.View_I233_5430_233_5407} />
          <View style={styles.View_I233_5430_233_5408}>
            <View style={styles.View_I233_5430_233_5409}>
              <View style={styles.View_I233_5430_233_5410}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd1/66ab/908beb749634eb5246610d0bd80f3b4b"
                  }}
                  style={styles.ImageBackground_I233_5430_233_5410_2_463}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc6/8b7f/8c8918f5846cb481bb31c5ea1ee56aaf"
                  }}
                  style={styles.ImageBackground_I233_5430_233_5410_2_464}
                />
              </View>
              <View style={styles.View_I233_5430_233_5411}>
                <View style={styles.View_I233_5430_233_5412}>
                  <Text style={styles.Text_I233_5430_233_5412}>BTC</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6363/394e/15964ccc63f4191a0b202da81b7bc966"
                  }}
                  style={styles.ImageBackground_I233_5430_233_5413}
                />
              </View>
              <View style={styles.View_I233_5430_233_5414}>
                <Text style={styles.Text_I233_5430_233_5414}>0.0002 - 50</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_233_5431}>
          <View style={styles.View_I233_5431_233_5407} />
          <View style={styles.View_I233_5431_233_5408}>
            <View style={styles.View_I233_5431_233_5409}>
              <View style={styles.View_I233_5431_233_5410}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/686c/1226/19abb80057faa327d4e0303f651de3c7"
                  }}
                  style={styles.ImageBackground_I233_5431_233_5410_233_5416}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0fc/0327/1594ba571866ee4d01a0054b43b2249c"
                  }}
                  style={styles.ImageBackground_I233_5431_233_5410_233_5417}
                />
              </View>
              <View style={styles.View_I233_5431_233_5411}>
                <View style={styles.View_I233_5431_233_5412}>
                  <Text style={styles.Text_I233_5431_233_5412}>ETH</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6363/394e/15964ccc63f4191a0b202da81b7bc966"
                  }}
                  style={styles.ImageBackground_I233_5431_233_5413}
                />
              </View>
              <View style={styles.View_I233_5431_233_5414}>
                <Text style={styles.Text_I233_5431_233_5414}>0.0006 - 750</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_233_5432}>
          <Text style={styles.Text_233_5432}>From</Text>
        </View>
        <View style={styles.View_233_5433}>
          <Text style={styles.Text_233_5433}>To</Text>
        </View>
      </View>
      <View style={styles.View_233_5434}>
        <View style={styles.View_233_5436}>
          <View style={styles.View_I233_5436_2_638}>
            <Text style={styles.Text_I233_5436_2_638}>P2P</Text>
          </View>
        </View>
        <View style={styles.View_233_5439}>
          <View style={styles.View_I233_5439_2_640}>
            <Text style={styles.Text_I233_5439_2_640}>Convert</Text>
          </View>
          <View style={styles.View_I233_5439_2_641}>
            <View style={styles.View_I233_5439_2_642} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6228/53ba/f0983f053a5c93f3ea591a10897c969c"
              }}
              style={styles.ImageBackground_I233_5439_2_643}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(13, 13, 15, 1)" },
  View_2: { height: hp("115%") },
  View_233_5425: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5425_2_5: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I233_5425_2_6: {
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
  ImageBackground_I233_5425_2_7: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I233_5425_2_8: {
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
  ImageBackground_I233_5425_2_9: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  ImageBackground_I233_5425_2_13: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  View_I233_5425_2_18: {
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
  View_I233_5425_2_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5425_2_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_233_5426: {
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
  View_I233_5426_2_111: {
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
  View_I233_5426_2_112: {
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
  View_I233_5426_2_113: {
    width: wp("39%"),
    minWidth: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5426_2_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5426_2_114: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_5426_2_115: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I233_5426_2_117: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_233_5427: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5427_2_1156: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I233_5427_2_1157: {
    width: wp("100%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(13, 13, 15, 1)"
  },
  View_I233_5427_2_1158: {
    width: wp("93%"),
    height: hp("28%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I233_5427_2_1159: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_I233_5427_2_1163: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I233_5427_2_1164: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1165: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  View_I233_5427_2_1166: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1166: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1167: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1168: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I233_5427_2_1169: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1170: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1171: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_5427_2_1172: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1173: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1174: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  View_I233_5427_2_1175: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1176: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1177: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I233_5427_2_1178: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1179: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1180: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_5427_2_1181: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1182: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1183: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  View_I233_5427_2_1184: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1185: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1186: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I233_5427_2_1187: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1188: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5427_2_1189: {
    width: wp("30%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_5427_2_1190: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5427_2_1190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5427_2_1191: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5427_2_1191_2_45: {
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
  View_233_5428: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I233_5428_0_2673: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I233_5428_0_2674: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I233_5428_0_2674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_5429: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%")
  },
  View_233_5430: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5430_233_5407: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)",
    borderColor: "rgba(41, 42, 46, 1)",
    borderWidth: 1
  },
  View_I233_5430_233_5408: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I233_5430_233_5409: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5430_233_5410: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I233_5430_233_5410_2_463: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I233_5430_233_5410_2_464: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I233_5430_233_5411: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5430_233_5412: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5430_233_5412: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5430_233_5413: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I233_5430_233_5414: {
    width: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5430_233_5414: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_5431: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5431_233_5407: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)",
    borderColor: "rgba(41, 42, 46, 1)",
    borderWidth: 1
  },
  View_I233_5431_233_5408: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I233_5431_233_5409: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5431_233_5410: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I233_5431_233_5410_233_5416: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I233_5431_233_5410_233_5417: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I233_5431_233_5411: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5431_233_5412: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5431_233_5412: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_5431_233_5413: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I233_5431_233_5414: {
    width: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I233_5431_233_5414: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_5432: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_5432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_5433: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_233_5433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_5434: {
    width: wp("122%"),
    minWidth: wp("122%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_233_5436: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5436_2_638: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I233_5436_2_638: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_5439: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_5439_2_640: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I233_5439_2_640: {
    color: "rgba(50, 160, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_5439_2_641: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_I233_5439_2_642: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 160, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I233_5439_2_643: {
    width: wp("7%"),
    height: hp("2%"),
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
