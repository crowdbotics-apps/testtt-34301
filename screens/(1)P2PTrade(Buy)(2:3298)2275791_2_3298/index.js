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
      <View style={styles.View_2_3299}>
        <View style={styles.View_I2_3299_2_5}>
          <View style={styles.View_I2_3299_2_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ce/23d5/d16c03c99c1fae9f60819828d91ba01b"
            }}
            style={styles.ImageBackground_I2_3299_2_7}
          />
          <View style={styles.View_I2_3299_2_8} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4eb/14fd/690fbcf5e50e1896c8119167d0f0c942"
          }}
          style={styles.ImageBackground_I2_3299_2_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abac/2e1a/5d8b536c9ab5d490253b310770c330fe"
          }}
          style={styles.ImageBackground_I2_3299_2_13}
        />
        <View style={styles.View_I2_3299_2_18}>
          <View style={styles.View_I2_3299_2_19}>
            <Text style={styles.Text_I2_3299_2_19}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_3300}>
        <View style={styles.View_I2_3300_2_111} />
        <View style={styles.View_I2_3300_2_112}>
          <View style={styles.View_I2_3300_2_113}>
            <Text style={styles.Text_I2_3300_2_113}>P2P</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec92/e23a/367f7cf29079f74c11987eeb9eac3311"
            }}
            style={styles.ImageBackground_I2_3300_2_114}
          />
        </View>
        <View style={styles.View_I2_3300_2_115}>
          <View style={styles.View_I2_3300_2_116}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9223/7e3f/97de67b814cddb9b43f5e3325363c742"
              }}
              style={styles.ImageBackground_I2_3300_2_116_2_1310}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a411/790a/06599d3c241e020cfe83881e7340f244"
            }}
            style={styles.ImageBackground_I2_3300_2_117}
          />
        </View>
      </View>
      <View style={styles.View_2_3301}>
        <View style={styles.View_2_3302}>
          <View style={styles.View_I2_3302_2_650}>
            <Text style={styles.Text_I2_3302_2_650}>HOVI</Text>
          </View>
        </View>
        <View style={styles.View_2_3303}>
          <View style={styles.View_I2_3303_2_652}>
            <Text style={styles.Text_I2_3303_2_652}>USDT</Text>
          </View>
        </View>
        <View style={styles.View_2_3304}>
          <View style={styles.View_I2_3304_2_650}>
            <Text style={styles.Text_I2_3304_2_650}>NGNT</Text>
          </View>
        </View>
        <View style={styles.View_2_3305}>
          <View style={styles.View_I2_3305_2_650}>
            <Text style={styles.Text_I2_3305_2_650}>BUSD</Text>
          </View>
        </View>
        <View style={styles.View_2_3306}>
          <View style={styles.View_I2_3306_2_650}>
            <Text style={styles.Text_I2_3306_2_650}>ADA</Text>
          </View>
        </View>
        <View style={styles.View_2_3307}>
          <View style={styles.View_I2_3307_2_650}>
            <Text style={styles.Text_I2_3307_2_650}>Favorites</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_3308}>
        <View style={styles.View_2_3309}>
          <View style={styles.View_I2_3309_2_1316}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35db/e537/011274c30c15e79c4a80e05dbac89f26"
              }}
              style={styles.ImageBackground_I2_3309_2_1317}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_I2_3309_2_1320}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("632_7733"))
              }
            >
              <View style={styles.View_I2_3309_2_1320_0_2673} />
              <View style={styles.View_I2_3309_2_1320_0_2674}>
                <Text style={styles.Text_I2_3309_2_1320_0_2674}>Buy</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_I2_3309_2_1321}>
              <View style={styles.View_I2_3309_2_1322}>
                <View style={styles.View_I2_3309_2_1323}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e11/cf81/07eaf7fd38e4e78d701d17ea14dbe4e2"
                    }}
                    style={styles.ImageBackground_I2_3309_2_1324}
                  />
                </View>
                <View style={styles.View_I2_3309_2_1325}>
                  <View style={styles.View_I2_3309_2_1326}>
                    <Text style={styles.Text_I2_3309_2_1326}>Mikedacrypto</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903e/35db/ba5106d6f0cd5cb09ce4b50394f14f51"
                    }}
                    style={styles.ImageBackground_I2_3309_2_1327}
                  />
                </View>
              </View>
              <View style={styles.View_I2_3309_2_1328}>
                <View style={styles.View_I2_3309_2_1329}>
                  <Text style={styles.Text_I2_3309_2_1329}>175 Trades</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4099/9cf0/b1694ce46586cb39042eae01c4f7d191"
                  }}
                  style={styles.ImageBackground_I2_3309_2_1330}
                />
                <View style={styles.View_I2_3309_2_1331}>
                  <Text text="" style={styles.Text_I2_3309_2_1331} />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3309_2_1332}>
              <View style={styles.View_I2_3309_2_1333}>
                <Text style={styles.Text_I2_3309_2_1333}>Price</Text>
              </View>
              <View style={styles.View_I2_3309_2_1334}>
                <View style={styles.View_I2_3309_2_1335}>
                  <Text style={styles.Text_I2_3309_2_1335}>1.14</Text>
                </View>
                <View style={styles.View_I2_3309_2_1336}>
                  <Text style={styles.Text_I2_3309_2_1336}>EUR</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3309_2_1337}>
              <View style={styles.View_I2_3309_2_1338}>
                <Text style={styles.Text_I2_3309_2_1338}>Crypto Amount</Text>
              </View>
              <View style={styles.View_I2_3309_2_1339}>
                <View style={styles.View_I2_3309_2_1340}>
                  <Text style={styles.Text_I2_3309_2_1340}>1,814.21</Text>
                </View>
                <View style={styles.View_I2_3309_2_1341}>
                  <Text style={styles.Text_I2_3309_2_1341}>USDT</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3309_2_1342}>
              <View style={styles.View_I2_3309_2_1343}>
                <Text style={styles.Text_I2_3309_2_1343}>Limit</Text>
              </View>
              <View style={styles.View_I2_3309_2_1344}>
                <View style={styles.View_I2_3309_2_1345}>
                  <Text style={styles.Text_I2_3309_2_1345}>€200.00</Text>
                </View>
                <View style={styles.View_I2_3309_2_1346}>
                  <Text style={styles.Text_I2_3309_2_1346}>-</Text>
                </View>
                <View style={styles.View_I2_3309_2_1347}>
                  <Text style={styles.Text_I2_3309_2_1347}>€4,703.93</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3309_2_1348}>
              <View style={styles.View_I2_3309_2_1349} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb15/f075/ace84f95e33475edcc99e76834aa3d50"
                }}
                style={styles.ImageBackground_I2_3309_2_1350}
              />
              <View style={styles.View_I2_3309_2_1351}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed01/34d6/2e52397d57bb669a0cf45fd25152256f"
                  }}
                  style={styles.ImageBackground_I2_3309_2_1351_2_1299}
                />
                <View style={styles.View_I2_3309_2_1351_2_1300}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee34/932a/4889f7fb2bef5617dbad09156de3d80c"
                    }}
                    style={styles.ImageBackground_I2_3309_2_1351_2_1301}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db49/053d/d59fd713d2d3d128ecdbdd617950a658"
                    }}
                    style={styles.ImageBackground_I2_3309_2_1351_2_1302}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ad/02c9/c9aabb95a62e2853fcf22b8b67e3fb26"
                    }}
                    style={styles.ImageBackground_I2_3309_2_1351_2_1303}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/519c/3970/543575bede35808360cfde9013bceac0"
                    }}
                    style={styles.ImageBackground_I2_3309_2_1351_2_1306}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2_3310}>
          <View style={styles.View_I2_3310_2_1316}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35db/e537/011274c30c15e79c4a80e05dbac89f26"
              }}
              style={styles.ImageBackground_I2_3310_2_1317}
            />
            <View style={styles.View_I2_3310_2_1320}>
              <View style={styles.View_I2_3310_2_1320_0_2673} />
              <View style={styles.View_I2_3310_2_1320_0_2674}>
                <Text style={styles.Text_I2_3310_2_1320_0_2674}>Buy</Text>
              </View>
            </View>
            <View style={styles.View_I2_3310_2_1321}>
              <View style={styles.View_I2_3310_2_1322}>
                <View style={styles.View_I2_3310_2_1323}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e11/cf81/07eaf7fd38e4e78d701d17ea14dbe4e2"
                    }}
                    style={styles.ImageBackground_I2_3310_2_1324}
                  />
                </View>
                <View style={styles.View_I2_3310_2_1325}>
                  <View style={styles.View_I2_3310_2_1326}>
                    <Text style={styles.Text_I2_3310_2_1326}>Cryptonic</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903e/35db/ba5106d6f0cd5cb09ce4b50394f14f51"
                    }}
                    style={styles.ImageBackground_I2_3310_2_1327}
                  />
                </View>
              </View>
              <View style={styles.View_I2_3310_2_1328}>
                <View style={styles.View_I2_3310_2_1329}>
                  <Text style={styles.Text_I2_3310_2_1329}>1700 Trades</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4099/9cf0/b1694ce46586cb39042eae01c4f7d191"
                  }}
                  style={styles.ImageBackground_I2_3310_2_1330}
                />
                <View style={styles.View_I2_3310_2_1331}>
                  <Text text="" style={styles.Text_I2_3310_2_1331} />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3310_2_1332}>
              <View style={styles.View_I2_3310_2_1333}>
                <Text style={styles.Text_I2_3310_2_1333}>Price</Text>
              </View>
              <View style={styles.View_I2_3310_2_1334}>
                <View style={styles.View_I2_3310_2_1335}>
                  <Text style={styles.Text_I2_3310_2_1335}>0.94</Text>
                </View>
                <View style={styles.View_I2_3310_2_1336}>
                  <Text style={styles.Text_I2_3310_2_1336}>EUR</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3310_2_1337}>
              <View style={styles.View_I2_3310_2_1338}>
                <Text style={styles.Text_I2_3310_2_1338}>Crypto Amount</Text>
              </View>
              <View style={styles.View_I2_3310_2_1339}>
                <View style={styles.View_I2_3310_2_1340}>
                  <Text style={styles.Text_I2_3310_2_1340}>1,314.21</Text>
                </View>
                <View style={styles.View_I2_3310_2_1341}>
                  <Text style={styles.Text_I2_3310_2_1341}>USDT</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3310_2_1342}>
              <View style={styles.View_I2_3310_2_1343}>
                <Text style={styles.Text_I2_3310_2_1343}>Limit</Text>
              </View>
              <View style={styles.View_I2_3310_2_1344}>
                <View style={styles.View_I2_3310_2_1345}>
                  <Text style={styles.Text_I2_3310_2_1345}>€500.00</Text>
                </View>
                <View style={styles.View_I2_3310_2_1346}>
                  <Text style={styles.Text_I2_3310_2_1346}>-</Text>
                </View>
                <View style={styles.View_I2_3310_2_1347}>
                  <Text style={styles.Text_I2_3310_2_1347}>€1,103.93</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3310_2_1348}>
              <View style={styles.View_I2_3310_2_1349} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb15/f075/ace84f95e33475edcc99e76834aa3d50"
                }}
                style={styles.ImageBackground_I2_3310_2_1350}
              />
              <View style={styles.View_I2_3310_2_1351}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed01/34d6/2e52397d57bb669a0cf45fd25152256f"
                  }}
                  style={styles.ImageBackground_I2_3310_2_1351_2_1299}
                />
                <View style={styles.View_I2_3310_2_1351_2_1300}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee34/932a/4889f7fb2bef5617dbad09156de3d80c"
                    }}
                    style={styles.ImageBackground_I2_3310_2_1351_2_1301}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db49/053d/d59fd713d2d3d128ecdbdd617950a658"
                    }}
                    style={styles.ImageBackground_I2_3310_2_1351_2_1302}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ad/02c9/c9aabb95a62e2853fcf22b8b67e3fb26"
                    }}
                    style={styles.ImageBackground_I2_3310_2_1351_2_1303}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/519c/3970/543575bede35808360cfde9013bceac0"
                    }}
                    style={styles.ImageBackground_I2_3310_2_1351_2_1306}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2_3311}>
          <View style={styles.View_I2_3311_2_1316}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35db/e537/011274c30c15e79c4a80e05dbac89f26"
              }}
              style={styles.ImageBackground_I2_3311_2_1317}
            />
            <View style={styles.View_I2_3311_2_1320}>
              <View style={styles.View_I2_3311_2_1320_0_2673} />
              <View style={styles.View_I2_3311_2_1320_0_2674}>
                <Text style={styles.Text_I2_3311_2_1320_0_2674}>Buy</Text>
              </View>
            </View>
            <View style={styles.View_I2_3311_2_1321}>
              <View style={styles.View_I2_3311_2_1322}>
                <View style={styles.View_I2_3311_2_1323}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e11/cf81/07eaf7fd38e4e78d701d17ea14dbe4e2"
                    }}
                    style={styles.ImageBackground_I2_3311_2_1324}
                  />
                </View>
                <View style={styles.View_I2_3311_2_1325}>
                  <View style={styles.View_I2_3311_2_1326}>
                    <Text style={styles.Text_I2_3311_2_1326}>Cryptonic</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/903e/35db/ba5106d6f0cd5cb09ce4b50394f14f51"
                    }}
                    style={styles.ImageBackground_I2_3311_2_1327}
                  />
                </View>
              </View>
              <View style={styles.View_I2_3311_2_1328}>
                <View style={styles.View_I2_3311_2_1329}>
                  <Text style={styles.Text_I2_3311_2_1329}>175 Trades</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4099/9cf0/b1694ce46586cb39042eae01c4f7d191"
                  }}
                  style={styles.ImageBackground_I2_3311_2_1330}
                />
                <View style={styles.View_I2_3311_2_1331}>
                  <Text text="" style={styles.Text_I2_3311_2_1331} />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3311_2_1332}>
              <View style={styles.View_I2_3311_2_1333}>
                <Text style={styles.Text_I2_3311_2_1333}>Price</Text>
              </View>
              <View style={styles.View_I2_3311_2_1334}>
                <View style={styles.View_I2_3311_2_1335}>
                  <Text style={styles.Text_I2_3311_2_1335}>0.84</Text>
                </View>
                <View style={styles.View_I2_3311_2_1336}>
                  <Text style={styles.Text_I2_3311_2_1336}>EUR</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3311_2_1337}>
              <View style={styles.View_I2_3311_2_1338}>
                <Text style={styles.Text_I2_3311_2_1338}>Crypto Amount</Text>
              </View>
              <View style={styles.View_I2_3311_2_1339}>
                <View style={styles.View_I2_3311_2_1340}>
                  <Text style={styles.Text_I2_3311_2_1340}>1,314.21</Text>
                </View>
                <View style={styles.View_I2_3311_2_1341}>
                  <Text style={styles.Text_I2_3311_2_1341}>USDT</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3311_2_1342}>
              <View style={styles.View_I2_3311_2_1343}>
                <Text style={styles.Text_I2_3311_2_1343}>Limit</Text>
              </View>
              <View style={styles.View_I2_3311_2_1344}>
                <View style={styles.View_I2_3311_2_1345}>
                  <Text style={styles.Text_I2_3311_2_1345}>€500.00</Text>
                </View>
                <View style={styles.View_I2_3311_2_1346}>
                  <Text style={styles.Text_I2_3311_2_1346}>-</Text>
                </View>
                <View style={styles.View_I2_3311_2_1347}>
                  <Text style={styles.Text_I2_3311_2_1347}>€1,103.93</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_3311_2_1348}>
              <View style={styles.View_I2_3311_2_1349} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb15/f075/ace84f95e33475edcc99e76834aa3d50"
                }}
                style={styles.ImageBackground_I2_3311_2_1350}
              />
              <View style={styles.View_I2_3311_2_1351}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed01/34d6/2e52397d57bb669a0cf45fd25152256f"
                  }}
                  style={styles.ImageBackground_I2_3311_2_1351_2_1299}
                />
                <View style={styles.View_I2_3311_2_1351_2_1300}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee34/932a/4889f7fb2bef5617dbad09156de3d80c"
                    }}
                    style={styles.ImageBackground_I2_3311_2_1351_2_1301}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db49/053d/d59fd713d2d3d128ecdbdd617950a658"
                    }}
                    style={styles.ImageBackground_I2_3311_2_1351_2_1302}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ad/02c9/c9aabb95a62e2853fcf22b8b67e3fb26"
                    }}
                    style={styles.ImageBackground_I2_3311_2_1351_2_1303}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/519c/3970/543575bede35808360cfde9013bceac0"
                    }}
                    style={styles.ImageBackground_I2_3311_2_1351_2_1306}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_3312} />
      <View style={styles.View_2_3313}>
        <View style={styles.View_I2_3313_2_45} />
      </View>
      <View style={styles.View_2_3314}>
        <View style={styles.View_2_3315}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I2_3315_2_638}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("640_8761"))
            }
          >
            <Text style={styles.Text_I2_3315_2_638}>Sell</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.View_2_3316}>
          <View style={styles.View_I2_3316_2_640}>
            <Text style={styles.Text_I2_3316_2_640}>Buy</Text>
          </View>
          <View style={styles.View_I2_3316_2_641}>
            <View style={styles.View_I2_3316_2_642} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6228/53ba/f0983f053a5c93f3ea591a10897c969c"
              }}
              style={styles.ImageBackground_I2_3316_2_643}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_232_8164}>
        <View style={styles.View_232_8165}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8165_4_6104}
          />
        </View>
        <View style={styles.View_232_8166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8166_4_6104}
          />
        </View>
        <View style={styles.View_232_8167}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8167_4_6104}
          />
        </View>
        <View style={styles.View_232_8168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8168_4_6104}
          />
        </View>
        <View style={styles.View_232_8169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8169_4_6104}
          />
        </View>
      </View>
      <View style={styles.View_232_8180}>
        <View style={styles.View_232_8181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8181_4_6104}
          />
        </View>
        <View style={styles.View_232_8182}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8182_4_6104}
          />
        </View>
        <View style={styles.View_232_8183}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8183_4_6104}
          />
        </View>
        <View style={styles.View_232_8184}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8184_4_6104}
          />
        </View>
        <View style={styles.View_232_8185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8185_4_6104}
          />
        </View>
      </View>
      <View style={styles.View_232_8093}>
        <View style={styles.View_232_8094}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8094_4_6104}
          />
        </View>
        <View style={styles.View_232_8095}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8095_4_6104}
          />
        </View>
        <View style={styles.View_232_8096}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8096_4_6104}
          />
        </View>
        <View style={styles.View_232_8097}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8097_4_6104}
          />
        </View>
        <View style={styles.View_232_8098}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b7/76f4/fe6fe643b5cba3f3cebd0a499e33ed0e"
            }}
            style={styles.ImageBackground_I232_8098_4_6104}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(13, 13, 15, 1)" },
  View_2: { height: hp("115%") },
  View_2_3299: {
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
  View_I2_3299_2_5: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I2_3299_2_6: {
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
  ImageBackground_I2_3299_2_7: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_3299_2_8: {
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
  ImageBackground_I2_3299_2_9: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  ImageBackground_I2_3299_2_13: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  View_I2_3299_2_18: {
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
  View_I2_3299_2_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3299_2_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_3300: {
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
  View_I2_3300_2_111: {
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
  View_I2_3300_2_112: {
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
  View_I2_3300_2_113: {
    width: wp("39%"),
    minWidth: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3300_2_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3300_2_114: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_3300_2_115: {
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
  View_I2_3300_2_116: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_3300_2_116_2_1310: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I2_3300_2_117: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_2_3301: {
    width: wp("137%"),
    minWidth: wp("137%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-32%"),
    top: hp("24%")
  },
  View_2_3302: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3302_2_650: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3302_2_650: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3303: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3303_2_652: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I2_3303_2_652: {
    color: "rgba(50, 160, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3304: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3304_2_650: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3304_2_650: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3305: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3305_2_650: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3305_2_650: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3306: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("119%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3306_2_650: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3306_2_650: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3307: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3307_2_650: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3307_2_650: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3308: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("31%")
  },
  View_2_3309: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3309_2_1316: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_I2_3309_2_1317: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  TouchableOpacity_I2_3309_2_1320: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1320_0_2673: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_3309_2_1320_0_2674: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1320_0_2674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1321: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1322: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1323: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2_3309_2_1324: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_3309_2_1325: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1326: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3309_2_1327: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_I2_3309_2_1328: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1329: {
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1329: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3309_2_1330: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_I2_3309_2_1331: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1331: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1332: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1333: {
    width: wp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1333: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1334: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1335: {
    width: wp("10%"),
    minWidth: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1336: {
    width: wp("6%"),
    minWidth: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1336: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1337: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1338: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1338: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1339: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1340: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1341: {
    width: wp("8%"),
    minWidth: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1341: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1342: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1343: {
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1343: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1344: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1345: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1346: {
    width: wp("1%"),
    minWidth: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1346: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1347: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3309_2_1347: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3309_2_1348: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3309_2_1349: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(50, 160, 255, 1)"
  },
  ImageBackground_I2_3309_2_1350: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_3309_2_1351: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_3309_2_1351_2_1299: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_3309_2_1351_2_1300: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I2_3309_2_1351_2_1301: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_3309_2_1351_2_1302: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_3309_2_1351_2_1303: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_3309_2_1351_2_1306: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3310: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3310_2_1316: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_I2_3310_2_1317: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_I2_3310_2_1320: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1320_0_2673: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_3310_2_1320_0_2674: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1320_0_2674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1321: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1322: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1323: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2_3310_2_1324: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_3310_2_1325: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1326: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3310_2_1327: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I2_3310_2_1328: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1329: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1329: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3310_2_1330: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_I2_3310_2_1331: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1331: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1332: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1333: {
    width: wp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1333: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1334: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1335: {
    width: wp("10%"),
    minWidth: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1336: {
    width: wp("6%"),
    minWidth: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1336: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1337: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1338: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1338: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1339: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1340: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1341: {
    width: wp("8%"),
    minWidth: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1341: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1342: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1343: {
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1343: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1344: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1345: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1346: {
    width: wp("1%"),
    minWidth: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1346: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1347: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3310_2_1347: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3310_2_1348: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3310_2_1349: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(50, 160, 255, 1)"
  },
  ImageBackground_I2_3310_2_1350: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_3310_2_1351: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_3310_2_1351_2_1299: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_3310_2_1351_2_1300: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I2_3310_2_1351_2_1301: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_3310_2_1351_2_1302: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_3310_2_1351_2_1303: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_3310_2_1351_2_1306: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3311: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3311_2_1316: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_I2_3311_2_1317: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_I2_3311_2_1320: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1320_0_2673: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_3311_2_1320_0_2674: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1320_0_2674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1321: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1322: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1323: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I2_3311_2_1324: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_3311_2_1325: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1326: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3311_2_1327: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I2_3311_2_1328: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1329: {
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1329: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3311_2_1330: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_I2_3311_2_1331: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1331: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1332: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1333: {
    width: wp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1333: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1334: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1335: {
    width: wp("10%"),
    minWidth: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1336: {
    width: wp("6%"),
    minWidth: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1336: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1337: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1338: {
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1338: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1339: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1340: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1341: {
    width: wp("8%"),
    minWidth: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1341: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1342: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1343: {
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1343: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1344: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1345: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1346: {
    width: wp("1%"),
    minWidth: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1346: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1347: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_3311_2_1347: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3311_2_1348: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3311_2_1349: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(50, 160, 255, 1)"
  },
  ImageBackground_I2_3311_2_1350: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_3311_2_1351: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_3311_2_1351_2_1299: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_3311_2_1351_2_1300: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I2_3311_2_1351_2_1301: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_3311_2_1351_2_1302: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_3311_2_1351_2_1303: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_3311_2_1351_2_1306: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3312: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61%")
  },
  View_2_3313: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3313_2_45: {
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
  View_2_3314: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_2_3315: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I2_3315_2_638: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_3315_2_638: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3316: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3316_2_640: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I2_3316_2_640: {
    color: "rgba(50, 160, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3316_2_641: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_I2_3316_2_642: {
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
  ImageBackground_I2_3316_2_643: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_232_8164: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("34%")
  },
  View_232_8165: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8165_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8166: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8166_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8167: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8167_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8168: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8168_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8169: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8169_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8180: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("66%")
  },
  View_232_8181: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8181_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8182: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8182_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8183: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8183_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8184: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8184_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8185: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8185_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8093: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("99%")
  },
  View_232_8094: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8094_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8095: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8095_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8096: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8096_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8097: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8097_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_232_8098: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8098_4_6104: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
