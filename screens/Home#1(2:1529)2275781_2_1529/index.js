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
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1563}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1571"))
        }
      >
        <View style={styles.View_I2_1563_2_300} />
        <View style={styles.View_I2_1563_2_301}>
          <View style={styles.View_I2_1563_2_301_2_471}>
            <View style={styles.View_I2_1563_2_301_2_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/291a/65ef/343c38ff86aa32fa4148cde6d4b36910"
                }}
                style={styles.ImageBackground_I2_1563_2_301_2_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10ed/4f30/2b487465a99ec9a37e2a5e70e8fa2b02"
                }}
                style={styles.ImageBackground_I2_1563_2_301_2_474}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f953/95cb/83cd1a231291b25f36a08458d8aca8c7"
              }}
              style={styles.ImageBackground_I2_1563_2_301_2_477}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1530}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_3298"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eabc/cac6/899bbf4fb3f57ff9afc342d3b63b8989"
          }}
          style={styles.ImageBackground_2_1531}
        />
        <View style={styles.View_2_1532}>
          <Text style={styles.Text_2_1532}>P2P Trading</Text>
        </View>
        <View style={styles.View_2_1533}>
          <Text style={styles.Text_2_1533}>
            Bank Transfer, Paypal, Kuda, etc.{" "}
          </Text>
        </View>
        <View style={styles.View_2_1534}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b295/2ce0/5dfc3213b754fd5126caf477d3c4d39c"
            }}
            style={styles.ImageBackground_I2_1534_2_275}
          />
        </View>
        <View style={styles.View_2_1535}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed01/34d6/2e52397d57bb669a0cf45fd25152256f"
            }}
            style={styles.ImageBackground_I2_1535_2_289}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0731/d527/fa34e1a351bf705abbf68fe835418c27"
            }}
            style={styles.ImageBackground_I2_1535_2_290}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_1536}>
        <View style={styles.View_I2_1536_2_5}>
          <View style={styles.View_I2_1536_2_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ce/23d5/d16c03c99c1fae9f60819828d91ba01b"
            }}
            style={styles.ImageBackground_I2_1536_2_7}
          />
          <View style={styles.View_I2_1536_2_8} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4eb/14fd/690fbcf5e50e1896c8119167d0f0c942"
          }}
          style={styles.ImageBackground_I2_1536_2_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abac/2e1a/5d8b536c9ab5d490253b310770c330fe"
          }}
          style={styles.ImageBackground_I2_1536_2_13}
        />
        <View style={styles.View_I2_1536_2_18}>
          <View style={styles.View_I2_1536_2_19}>
            <Text style={styles.Text_I2_1536_2_19}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1537}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1538}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3298"))
          }
        >
          <View style={styles.View_I2_1538_2_296}>
            <View style={styles.View_I2_1538_2_297}>
              <View style={styles.View_I2_1538_2_297_2_300} />
              <View style={styles.View_I2_1538_2_297_2_301}>
                <View style={styles.View_I2_1538_2_297_2_301_2_303}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7034/3705/f30b4fb913f9b88d1dd3da8e2cffae4a"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_304}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/5006/6d55e97a876f6e8b796639ff9bac834b"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_305}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ca/6890/f257628dbeba02923ab0a2167a0790f3"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_306}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa8/711d/e7f86ed7883f2999bf70d6bd48460b3e"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_307}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97d0/55cd/2b590a9711e35ac58c22a05f21543d09"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_308}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b396/8fc5/387410f7e47ffca59c820ec2e10fcc32"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_309}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8600/b5c7/0a4d5c21e3cbf4275b3195aa622cfdd5"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_310}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53a7/8f95/b1a0e4f8c0fa9ae84e81135edfccf4b0"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_311}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1892/708f/7811178e95daa3513d134160e545c678"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_315}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8600/b5c7/0a4d5c21e3cbf4275b3195aa622cfdd5"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_316}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0370/543d/5e9777198e9b8ce930831eea87b25a86"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_317}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783d/350d/b29cf07ce0b9f7a54f5c783aec971463"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_321}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2289/44dc/7e41ddec9e4a6a89a655b650136d3885"
                    }}
                    style={styles.ImageBackground_I2_1538_2_297_2_301_2_322}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_1538_2_298}>
              <Text style={styles.Text_I2_1538_2_298}>P2P</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1539}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("258_6768"))
          }
        >
          <View style={styles.View_I2_1539_2_296}>
            <View style={styles.View_I2_1539_2_297}>
              <View style={styles.View_I2_1539_2_297_2_300} />
              <View style={styles.View_I2_1539_2_297_2_301}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/962b/4476/2fc10034e33d8da2d616896335ef7a95"
                  }}
                  style={styles.ImageBackground_I2_1539_2_297_2_301_2_324}
                />
              </View>
            </View>
            <View style={styles.View_I2_1539_2_298}>
              <Text style={styles.Text_I2_1539_2_298}>Gift Card</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_2_1540}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I2_1540_2_296}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_1581"))
            }
          >
            <View style={styles.View_I2_1540_2_297}>
              <View style={styles.View_I2_1540_2_297_2_300} />
              <View style={styles.View_I2_1540_2_297_2_301}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9866/5dbe/5542e2100ccd2effe9832c32526d5ec4"
                  }}
                  style={styles.ImageBackground_I2_1540_2_297_2_301_2_275}
                />
              </View>
            </View>
            <View style={styles.View_I2_1540_2_298}>
              <Text style={styles.Text_I2_1540_2_298}>Deposit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_2_1541}>
          <View style={styles.View_I2_1541_2_296}>
            <View style={styles.View_I2_1541_2_297}>
              <View style={styles.View_I2_1541_2_297_2_301}>
                <View style={styles.View_I2_1541_2_297_2_301_2_338}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753d/3b81/3759d42efc87db85883303b61299dc49"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_339}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97d0/55cd/2b590a9711e35ac58c22a05f21543d09"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_340}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa8/711d/e7f86ed7883f2999bf70d6bd48460b3e"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_341}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ee/7d97/2f2fb05b6b45e376faa5a3d77f0a5dbd"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_342}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cecb/e0e0/29ecb085f57c7f7a61c955f8537bf733"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_343}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a37e/2f58/41071ce3b105de91378e2412c3eb7c66"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_344}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a7/6652/b1e4d02cdecefe9544d0a9b2fa2ddce9"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_345}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fbf/8f22/d8ade6c5debff4f5118a7560299c8502"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_346}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/ea2c/201317b652150154ea6db6f8c0934051"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_347}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e47a/e0c2/69b58b09fe2220fd5644cca1f7ec57b6"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_348}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/0707/e1e744772851a80c1e978730b5354a1c"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_349}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b596/eb8e/2fe1725a7f1406396757844eb5c557e6"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_350}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9003/c3fd/e94d7d4b0ded7148a2da15884b9ee873"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_351}
                  />
                  <View style={styles.View_I2_1541_2_297_2_301_2_352} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5f/32fb/c5d41d0c61ab385c11bb86449602e56a"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_353}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0813/d54c/67043aa8bb94dd5f05593a1cba845795"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_354}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/649a/141a/2fa8d4475011c248ef8c1c3b4771cb3e"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_355}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ed/76bc/356d9fbd5382cdbe7c920303214f8099"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_356}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f31e/4787/014daf9bf73160a50d3ca24c1de5002f"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_357}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bca/0f89/1ac8b86cd99868c9e51b76948876e2bf"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_358}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0131/dbc8/af91e84cd4fc5c515baabee09f683b23"
                    }}
                    style={styles.ImageBackground_I2_1541_2_297_2_301_2_359}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_1541_2_298}>
              <Text style={styles.Text_I2_1541_2_298}>Bonus</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1542}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("240_5661"))
          }
        >
          <View style={styles.View_I2_1542_2_296}>
            <View style={styles.View_I2_1542_2_297}>
              <View style={styles.View_I2_1542_2_297_2_300} />
              <View style={styles.View_I2_1542_2_297_2_301}>
                <View style={styles.View_I2_1542_2_297_2_301_2_338}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753d/3b81/3759d42efc87db85883303b61299dc49"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_339}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97d0/55cd/2b590a9711e35ac58c22a05f21543d09"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_340}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa8/711d/e7f86ed7883f2999bf70d6bd48460b3e"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_341}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ee/7d97/2f2fb05b6b45e376faa5a3d77f0a5dbd"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_342}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cecb/e0e0/29ecb085f57c7f7a61c955f8537bf733"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_343}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a37e/2f58/41071ce3b105de91378e2412c3eb7c66"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_344}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a7/6652/b1e4d02cdecefe9544d0a9b2fa2ddce9"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_345}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fbf/8f22/d8ade6c5debff4f5118a7560299c8502"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_346}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/ea2c/201317b652150154ea6db6f8c0934051"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_347}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e47a/e0c2/69b58b09fe2220fd5644cca1f7ec57b6"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_348}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/0707/e1e744772851a80c1e978730b5354a1c"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_349}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b596/eb8e/2fe1725a7f1406396757844eb5c557e6"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_350}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9003/c3fd/e94d7d4b0ded7148a2da15884b9ee873"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_351}
                  />
                  <View style={styles.View_I2_1542_2_297_2_301_2_352} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe5f/32fb/c5d41d0c61ab385c11bb86449602e56a"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_353}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0813/d54c/67043aa8bb94dd5f05593a1cba845795"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_354}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/649a/141a/2fa8d4475011c248ef8c1c3b4771cb3e"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_355}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ed/76bc/356d9fbd5382cdbe7c920303214f8099"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_356}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f31e/4787/014daf9bf73160a50d3ca24c1de5002f"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_357}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bca/0f89/1ac8b86cd99868c9e51b76948876e2bf"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_358}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0131/dbc8/af91e84cd4fc5c515baabee09f683b23"
                    }}
                    style={styles.ImageBackground_I2_1542_2_297_2_301_2_359}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_1542_2_298}>
              <Text text="" style={styles.Text_I2_1542_2_298} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1543}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("229_7889"))
          }
        >
          <View style={styles.View_I2_1543_2_296}>
            <View style={styles.View_I2_1543_2_297}>
              <View style={styles.View_I2_1543_2_297_2_300} />
              <View style={styles.View_I2_1543_2_297_2_301}>
                <View style={styles.View_I2_1543_2_297_2_301_2_364}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ca/6890/f257628dbeba02923ab0a2167a0790f3"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_365}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7034/3705/f30b4fb913f9b88d1dd3da8e2cffae4a"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_366}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753d/3b81/3759d42efc87db85883303b61299dc49"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_367}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/5006/6d55e97a876f6e8b796639ff9bac834b"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_368}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a11/f582/89561b1ef66efc7ccf1bb2f6ba14c8f2"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_369}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f9a/add6/332f1cfc1862fb32e3c7d625a775116f"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_370}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f9a/add6/332f1cfc1862fb32e3c7d625a775116f"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_371}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df26/99df/035c941192ee30b0f3f8a21263fd4f92"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_372}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c66f/92c6/8fad9d2f37c8312787c88df6274a1127"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_373}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511a/e98e/d1e86874baaf3f44991c40bc2c089a47"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_374}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2466/c2f7/59e93759a2b2da39037a15a07f25434a"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_375}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/187a/5f94/db78b98d39dd3ea974c3cbe29b3c9d31"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_376}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7acc/2e53/6024901bd63bcd3601b1948ffdafa8a2"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_377}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511a/e98e/d1e86874baaf3f44991c40bc2c089a47"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_378}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b9a/c4ce/134195149ef347091f0b056769b66475"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_379}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c0/8fec/1fbe5b293f5d5846337c65b0c5a3c416"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_380}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511a/e98e/d1e86874baaf3f44991c40bc2c089a47"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_381}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b9a/c4ce/134195149ef347091f0b056769b66475"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_382}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3484/f681/d3f74e2e46318c80bd2c19e62dafd306"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_383}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/695d/9965/fb08472c1e2173baf0f121cea831fbdc"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_384}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf73/5c76/3f101fd0aaa9a0dffb61db07264649ee"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_385}
                  />
                  <View style={styles.View_I2_1543_2_297_2_301_2_389} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004e/0a37/c8b4d30d81e6c6282dfa4c48022ef1f5"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_390}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/004e/0a37/c8b4d30d81e6c6282dfa4c48022ef1f5"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_391}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f028/055c/28ab58857249f45bf404dcec71ef487d"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_392}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a2f/648a/1ac191beee98f1c65d828f399bf372a3"
                    }}
                    style={styles.ImageBackground_I2_1543_2_297_2_301_2_393}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_1543_2_298}>
              <Text style={styles.Text_I2_1543_2_298}>Hovii Pro</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1544}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("229_7455"))
          }
        >
          <View style={styles.View_I2_1544_2_296}>
            <View style={styles.View_I2_1544_2_297}>
              <View style={styles.View_I2_1544_2_297_2_300} />
              <View style={styles.View_I2_1544_2_297_2_301}>
                <View style={styles.View_I2_1544_2_297_2_301_2_395}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7034/3705/f30b4fb913f9b88d1dd3da8e2cffae4a"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_396}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7034/3705/f30b4fb913f9b88d1dd3da8e2cffae4a"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_397}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97d0/55cd/2b590a9711e35ac58c22a05f21543d09"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_398}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ca/6890/f257628dbeba02923ab0a2167a0790f3"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_399}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753d/3b81/3759d42efc87db85883303b61299dc49"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_400}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5559/5ecd/e629dcfa92943ea4f88021d894bc367d"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_401}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c6a/1e08/fb103446771e3a832168da69ffecca2a"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_402}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8a8/048a/4a316db29eeafdd099018b6296b78ca0"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_403}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8a8/048a/4a316db29eeafdd099018b6296b78ca0"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_404}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8a8/048a/4a316db29eeafdd099018b6296b78ca0"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_405}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8a8/048a/4a316db29eeafdd099018b6296b78ca0"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_406}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/247b/d3cb/df4369fdbd303730cab41e6626585a9a"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_407}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/50c8/9acb8e4783ff989ccc9898ef69be035e"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_408}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/50c8/9acb8e4783ff989ccc9898ef69be035e"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_409}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/50c8/9acb8e4783ff989ccc9898ef69be035e"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_410}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/295d/93f7/b7f73b8479b6dee6bf35082d7111279d"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_411}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64a5/8881/45d90ec493bab0c0898cff1cf68fc841"
                    }}
                    style={styles.ImageBackground_I2_1544_2_297_2_301_2_412}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_1544_2_298}>
              <Text style={styles.Text_I2_1544_2_298}>NFT</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_2_1545}>
          <View style={styles.View_I2_1545_2_296}>
            <View style={styles.View_I2_1545_2_297}>
              <View style={styles.View_I2_1545_2_297_2_300} />
              <View style={styles.View_I2_1545_2_297_2_301}>
                <View style={styles.View_I2_1545_2_297_2_301_2_417}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f41/c20a/54a927bf8d6bef815160d6d1a6c885da"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_418}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8686/5401/a8723815acd0a2b275c8f7bb23131b64"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_419}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64a5/8881/45d90ec493bab0c0898cff1cf68fc841"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_420}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0ae/4f44/3799e65dd2034c0c05f8498353888100"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_424}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d9e/6a04/f1492019c5f5a2cb79f26d2597db169a"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_425}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78cb/edde/2fcfa3a2a987bc915905a37b561d3cbd"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_426}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2237/d08d/d8ba1a40341eb26887cd14580393a60c"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_427}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d0/a2e7/4b24341da7225d1b9864aa3d8f58eb05"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_428}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/e960/d7abf67cf468f264f7fef00813f1e61d"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_429}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7034/3705/f30b4fb913f9b88d1dd3da8e2cffae4a"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_430}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97d0/55cd/2b590a9711e35ac58c22a05f21543d09"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_431}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ca/6890/f257628dbeba02923ab0a2167a0790f3"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_432}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753d/3b81/3759d42efc87db85883303b61299dc49"
                    }}
                    style={styles.ImageBackground_I2_1545_2_297_2_301_2_433}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_1545_2_298}>
              <Text style={styles.Text_I2_1545_2_298}>Trade Guide</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1546}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("240_5661"))
          }
        >
          <View style={styles.View_I2_1546_2_296}>
            <View style={styles.View_I2_1546_2_297}>
              <View style={styles.View_I2_1546_2_297_2_300} />
              <View style={styles.View_I2_1546_2_297_2_301}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d1/0992/610cdcea2aff2a7b0ae3ba71a587edf1"
                  }}
                  style={styles.ImageBackground_I2_1546_2_297_2_301_2_435}
                />
              </View>
            </View>
            <View style={styles.View_I2_1546_2_298}>
              <Text style={styles.Text_I2_1546_2_298}>Referral</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_1549} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5723/11f5/1d3d3b085385a9a847c4275a716b74d4"
        }}
        style={styles.ImageBackground_2_1554}
      />
      <View style={styles.View_2_1564}>
        <View style={styles.View_I2_1564_2_300} />
        <View style={styles.View_I2_1564_2_301}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e53c/a472/7908a8573f54c775695a0f8b147012b4"
            }}
            style={styles.ImageBackground_I2_1564_2_301_2_123}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93f5/6475/70a938546ec21717ac2c016e6ac8478b"
            }}
            style={styles.ImageBackground_I2_1564_2_301_2_126}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9da/2714/e7d1ed9caa11c2f165cf3532e6544ee4"
        }}
        style={styles.ImageBackground_2_1566}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0ab/435e/6fc2c0af7a3d0c38a5b5db65801c71a3"
        }}
        style={styles.ImageBackground_232_12404}
      />
      <View style={styles.View_2_1552}>
        <View style={styles.View_I2_1552_2_456} />
        <View style={styles.View_I2_1552_2_458}>
          <Text style={styles.Text_I2_1552_2_458}>+ 0.33%</Text>
        </View>
        <View style={styles.View_I2_1552_2_460}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978d/0375/33cd4f7a0ff2b83bf02851e5fb7f7167"
            }}
            style={styles.ImageBackground_I2_1552_2_460_2_463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff8/c876/3096718432168a7f91eb92b376b34b67"
            }}
            style={styles.ImageBackground_I2_1552_2_460_2_464}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc87/0f87/1132a6ddb57f94c821ec569612c4bc68"
          }}
          style={styles.ImageBackground_I2_1552_2_461}
        />
      </View>
      <View style={styles.View_232_12409}>
        <Text style={styles.Text_232_12409}>$246.6898</Text>
      </View>
      <View style={styles.View_232_12408}>
        <Text style={styles.Text_232_12408}>BTC / BUSD</Text>
      </View>
      <View style={styles.View_232_12410}>
        <View style={styles.View_I232_12410_2_456} />
        <View style={styles.View_I232_12410_2_458}>
          <Text style={styles.Text_I232_12410_2_458}>+ 0.33%</Text>
        </View>
        <View style={styles.View_I232_12410_2_460}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978d/0375/33cd4f7a0ff2b83bf02851e5fb7f7167"
            }}
            style={styles.ImageBackground_I232_12410_2_460_2_463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff8/c876/3096718432168a7f91eb92b376b34b67"
            }}
            style={styles.ImageBackground_I232_12410_2_460_2_464}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc87/0f87/1132a6ddb57f94c821ec569612c4bc68"
          }}
          style={styles.ImageBackground_I232_12410_2_461}
        />
      </View>
      <View style={styles.View_232_12423}>
        <Text style={styles.Text_232_12423}>ETH / USDT</Text>
      </View>
      <View style={styles.View_232_12424}>
        <Text style={styles.Text_232_12424}>$246.6898</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e75/40a4/ca65fcf849cff6b19b51e08d9eaa89cf"
        }}
        style={styles.ImageBackground_232_12425}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/846d/09ac/d9e69be78de1db788d3b078f5e080cdb"
        }}
        style={styles.TouchableOpacity_269_7983}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("239_5439"))
        }
      />
      <View style={styles.View_232_8230}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e9/bf46/1c8cca392b481a92be58accd6b796f22"
          }}
          style={styles.ImageBackground_232_8231}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8479/f34f/ecdaf0cec2b054025922155958bb8017"
          }}
          style={styles.ImageBackground_232_8232}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6308/c268/84949cc09c195eae92da5aed85bab24c"
          }}
          style={styles.ImageBackground_232_8235}
        />
        <View style={styles.View_232_8236}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31ab/0d68/9be30d0dc037c144776b986ed3cf14fb"
            }}
            style={styles.ImageBackground_I232_8236_2_503}
          />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6972/9ff9/e558bf42ee1603283a8586de3deb1409"
          }}
          style={styles.TouchableOpacity_232_8237}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3298"))
          }
        />
        <View style={styles.View_232_8238}>
          <View style={styles.View_I232_8238_2_45} />
        </View>
        <View style={styles.View_232_8239}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e6c/5025/42ba6ae60f00613695692712afe946d6"
            }}
            style={styles.ImageBackground_I232_8239_2_508}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_232_8240}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("239_6158"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a176/444f/6fab3038f014c1c709b1d4e71805df94"
            }}
            style={styles.ImageBackground_I232_8240_2_514}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/173e/0ca2/394c0c0a2309c2364046a7b46d3ea27c"
          }}
          style={styles.ImageBackground_232_8241}
        />
        <View style={styles.View_232_8242}>
          <Text style={styles.Text_232_8242}>Market</Text>
        </View>
        <View style={styles.View_232_8243}>
          <Text style={styles.Text_232_8243}>ADS</Text>
        </View>
        <View style={styles.View_232_8244}>
          <Text style={styles.Text_232_8244}>Wallet</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(13, 13, 15, 1)" },
  View_2: { height: hp("115%") },
  TouchableOpacity_2_1563: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1563_2_300: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1563_2_301: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1563_2_301_2_471: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I2_1563_2_301_2_472: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1563_2_301_2_473: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1563_2_301_2_474: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1563_2_301_2_477: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_2_1530: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_1531: {
    width: wp("86%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_1532: {
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1532: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1533: {
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_1533: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1534: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1534_2_275: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_2_1535: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1535_2_289: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1535_2_290: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_2_1536: {
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
  View_I2_1536_2_5: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I2_1536_2_6: {
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
  ImageBackground_I2_1536_2_7: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_1536_2_8: {
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
  ImageBackground_I2_1536_2_9: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  ImageBackground_I2_1536_2_13: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  View_I2_1536_2_18: {
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
  View_I2_1536_2_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1536_2_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_1537: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("42%")
  },
  TouchableOpacity_2_1538: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1538_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1538_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1538_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1538_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1538_2_297_2_301_2_303: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_304: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_305: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_306: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_307: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_308: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_309: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_310: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_311: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_315: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_316: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_317: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_321: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1538_2_297_2_301_2_322: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1538_2_298: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1538_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1539: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1539_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1539_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1539_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1539_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1539_2_297_2_301_2_324: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I2_1539_2_298: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1539_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1540: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I2_1540_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1540_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1540_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1540_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1540_2_297_2_301_2_275: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I2_1540_2_298: {
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1540_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1541: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1541_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1541_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1541_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1541_2_297_2_301_2_338: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_339: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_340: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_341: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_342: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_343: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_344: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_345: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_346: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_347: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_348: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_349: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_350: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_351: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I2_1541_2_297_2_301_2_352: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(206, 232, 255, 1)"
  },
  ImageBackground_I2_1541_2_297_2_301_2_353: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_354: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_355: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_356: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_357: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_358: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1541_2_297_2_301_2_359: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_1541_2_298: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1541_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1542: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1542_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1542_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1542_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1542_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1542_2_297_2_301_2_338: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_339: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_340: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_341: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_342: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_343: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_344: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_345: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_346: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_347: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_348: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_349: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_350: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_351: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I2_1542_2_297_2_301_2_352: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(206, 232, 255, 1)"
  },
  ImageBackground_I2_1542_2_297_2_301_2_353: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_354: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_355: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_356: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_357: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_358: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1542_2_297_2_301_2_359: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_1542_2_298: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1542_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1543: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1543_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1543_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1543_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1543_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1543_2_297_2_301_2_364: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_365: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_366: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_367: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_368: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_369: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_370: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_371: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_372: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_373: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_374: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_375: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_376: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_377: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_378: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_379: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_380: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_381: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_382: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_383: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_384: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_385: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_1543_2_297_2_301_2_389: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(50, 160, 255, 1)"
  },
  ImageBackground_I2_1543_2_297_2_301_2_390: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_391: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_392: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I2_1543_2_297_2_301_2_393: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I2_1543_2_298: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1543_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1544: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1544_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1544_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1544_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1544_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1544_2_297_2_301_2_395: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_396: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_397: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_398: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_399: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_400: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_401: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_402: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_403: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_404: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_405: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_406: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_407: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_408: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_409: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_410: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_411: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1544_2_297_2_301_2_412: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_1544_2_298: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1544_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1545: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1545_2_296: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1545_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1545_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1545_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1545_2_297_2_301_2_417: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_418: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_419: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_420: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_424: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_425: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_426: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_427: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_428: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_429: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_430: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_431: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_432: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_1545_2_297_2_301_2_433: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_1545_2_298: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1545_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1546: {
    width: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1546_2_296: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1546_2_297: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1546_2_297_2_300: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1546_2_297_2_301: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1546_2_297_2_301_2_435: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_1546_2_298: {
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_1546_2_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1549: {
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
  ImageBackground_2_1554: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%")
  },
  View_2_1564: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1564_2_300: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1564_2_301: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1564_2_301_2_123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I2_1564_2_301_2_126: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_2_1566: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("39%")
  },
  ImageBackground_232_12404: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("39%")
  },
  View_2_1552: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1552_2_456: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I2_1552_2_458: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I2_1552_2_458: {
    color: "rgba(6, 226, 225, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_1552_2_460: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1552_2_460_2_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1552_2_460_2_464: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I2_1552_2_461: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_232_12409: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_232_12409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_12408: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_232_12408: {
    color: "rgba(6, 226, 225, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_12410: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_12410_2_456: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 42, 46, 1)"
  },
  View_I232_12410_2_458: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I232_12410_2_458: {
    color: "rgba(6, 226, 225, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_12410_2_460: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_12410_2_460_2_463: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I232_12410_2_460_2_464: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I232_12410_2_461: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_232_12423: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_232_12423: {
    color: "rgba(6, 226, 225, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_12424: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_232_12424: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_232_12425: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("9%")
  },
  TouchableOpacity_269_7983: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_232_8230: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_232_8231: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_232_8232: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_232_8235: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_232_8236: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8236_2_503: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_232_8237: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_232_8238: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8238_2_45: {
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
  View_232_8239: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8239_2_508: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_232_8240: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I232_8240_2_514: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_232_8241: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_232_8242: {
    width: wp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_232_8242: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_8243: {
    width: wp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    justifyContent: "flex-start"
  },
  Text_232_8243: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_8244: {
    width: wp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    justifyContent: "flex-start"
  },
  Text_232_8244: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
