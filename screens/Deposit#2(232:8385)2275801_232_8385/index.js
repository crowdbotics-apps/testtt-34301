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
      <View style={styles.View_232_8386}>
        <View style={styles.View_I232_8386_2_5}>
          <View style={styles.View_I232_8386_2_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ce/23d5/d16c03c99c1fae9f60819828d91ba01b"
            }}
            style={styles.ImageBackground_I232_8386_2_7}
          />
          <View style={styles.View_I232_8386_2_8} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4eb/14fd/690fbcf5e50e1896c8119167d0f0c942"
          }}
          style={styles.ImageBackground_I232_8386_2_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abac/2e1a/5d8b536c9ab5d490253b310770c330fe"
          }}
          style={styles.ImageBackground_I232_8386_2_13}
        />
        <View style={styles.View_I232_8386_2_18}>
          <View style={styles.View_I232_8386_2_19}>
            <Text style={styles.Text_I232_8386_2_19}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_232_8387}>
        <View style={styles.View_I232_8387_2_111} />
        <View style={styles.View_I232_8387_2_112}>
          <View style={styles.View_I232_8387_2_113}>
            <Text style={styles.Text_I232_8387_2_113}>Deposit</Text>
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec92/e23a/367f7cf29079f74c11987eeb9eac3311"
            }}
            style={styles.TouchableOpacity_I232_8387_2_114}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_1529"))
            }
          />
        </View>
        <View style={styles.View_I232_8387_2_115} />
      </View>
      <View style={styles.View_232_8388}>
        <View style={styles.View_I232_8388_2_645} />
        <View style={styles.View_I232_8388_2_646}>
          <View style={styles.View_I232_8388_2_647}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7789/94dc/c25432b72037dd6206473c883496a361"
              }}
              style={styles.ImageBackground_I232_8388_2_647_2_123}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81a1/eda3/44cca2492cc51a62b638baaa5d0ebb35"
              }}
              style={styles.ImageBackground_I232_8388_2_647_2_126}
            />
          </View>
          <View style={styles.View_I232_8388_2_648}>
            <Text style={styles.Text_I232_8388_2_648}>Search coins</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_232_8389}>
        <View style={styles.View_I232_8389_2_843} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I232_8389_2_844}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("232_8403"))
          }
        >
          <View style={styles.View_I232_8389_2_845}>
            <Text style={styles.Text_I232_8389_2_845}>AED</Text>
          </View>
          <View style={styles.View_I232_8389_2_846}>
            <Text style={styles.Text_I232_8389_2_846}>
              United Arab Emirates{" "}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I232_8389_2_847}>
          <View style={styles.View_I232_8389_2_847_2_928}>
            <View style={styles.View_I232_8389_2_847_2_929} />
            <View style={styles.View_I232_8389_2_847_2_930} />
            <View style={styles.View_I232_8389_2_847_2_931} />
            <View style={styles.View_I232_8389_2_847_2_932} />
          </View>
        </View>
      </View>
      <View style={styles.View_232_8390}>
        <View style={styles.View_I232_8390_2_843} />
        <View style={styles.View_I232_8390_2_844}>
          <View style={styles.View_I232_8390_2_845}>
            <Text style={styles.Text_I232_8390_2_845}>ARS</Text>
          </View>
          <View style={styles.View_I232_8390_2_846}>
            <Text style={styles.Text_I232_8390_2_846}>Argentina Peso</Text>
          </View>
        </View>
        <View style={styles.View_I232_8390_2_847}>
          <View style={styles.View_I232_8390_2_847_2_934}>
            <View style={styles.View_I232_8390_2_847_2_935} />
            <View style={styles.View_I232_8390_2_847_2_936} />
            <View style={styles.View_I232_8390_2_847_2_937} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb48/99d2/2408ddef4312dc1e0036a0bcf1505f3d"
              }}
              style={styles.ImageBackground_I232_8390_2_847_2_938}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_232_8391}>
        <View style={styles.View_I232_8391_2_843} />
        <View style={styles.View_I232_8391_2_844}>
          <View style={styles.View_I232_8391_2_845}>
            <Text style={styles.Text_I232_8391_2_845}>AUD</Text>
          </View>
          <View style={styles.View_I232_8391_2_846}>
            <Text style={styles.Text_I232_8391_2_846}>Australian Dollar</Text>
          </View>
        </View>
        <View style={styles.View_I232_8391_2_847}>
          <View style={styles.View_I232_8391_2_847_2_940}>
            <View style={styles.View_I232_8391_2_847_2_941} />
            <View style={styles.View_I232_8391_2_847_2_942}>
              <View style={styles.View_I232_8391_2_847_2_943} />
              <View style={styles.View_I232_8391_2_847_2_944}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bbf/cd44/e349b0d8e73ec445c396a1578a95c945"
                  }}
                  style={styles.ImageBackground_I232_8391_2_847_2_945}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63cc/2cd2/698c934c5c36a8dea2284b89e69814a3"
                  }}
                  style={styles.ImageBackground_I232_8391_2_847_2_948}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d5/534b/98c29a719db39f133601d466acdc3346"
                }}
                style={styles.ImageBackground_I232_8391_2_847_2_954}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac84/e811/65da3b617a5ecc1417b1f72ec71794a2"
                }}
                style={styles.ImageBackground_I232_8391_2_847_2_955}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/e960/d7abf67cf468f264f7fef00813f1e61d"
              }}
              style={styles.ImageBackground_I232_8391_2_847_2_956}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/e960/d7abf67cf468f264f7fef00813f1e61d"
              }}
              style={styles.ImageBackground_I232_8391_2_847_2_957}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/e960/d7abf67cf468f264f7fef00813f1e61d"
              }}
              style={styles.ImageBackground_I232_8391_2_847_2_958}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/e960/d7abf67cf468f264f7fef00813f1e61d"
              }}
              style={styles.ImageBackground_I232_8391_2_847_2_959}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f992/e960/d7abf67cf468f264f7fef00813f1e61d"
              }}
              style={styles.ImageBackground_I232_8391_2_847_2_960}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e810/2b4d/ecec52465dfda3a1d82d664be67413ba"
              }}
              style={styles.ImageBackground_I232_8391_2_847_2_961}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_232_8392}>
        <View style={styles.View_I232_8392_2_843} />
        <View style={styles.View_I232_8392_2_844}>
          <View style={styles.View_I232_8392_2_845}>
            <Text style={styles.Text_I232_8392_2_845}>BRL</Text>
          </View>
          <View style={styles.View_I232_8392_2_846}>
            <Text style={styles.Text_I232_8392_2_846}>Brazilian Real</Text>
          </View>
        </View>
        <View style={styles.View_I232_8392_2_847}>
          <View style={styles.View_I232_8392_2_847_2_963}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd62/1f0a/e55054b1f62e0455fe40daf4aef02f56"
              }}
              style={styles.ImageBackground_I232_8392_2_847_2_964}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea41/8091/e8715aa6b20ee7f8ecbf79810f8007c1"
              }}
              style={styles.ImageBackground_I232_8392_2_847_2_965}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec96/fe9e/dae4574427495159000cf6c96d8ede55"
              }}
              style={styles.ImageBackground_I232_8392_2_847_2_966}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbf1/9935/97d41f3af72bb8201d019fdd25e31a2a"
              }}
              style={styles.ImageBackground_I232_8392_2_847_2_969}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbf1/9935/97d41f3af72bb8201d019fdd25e31a2a"
              }}
              style={styles.ImageBackground_I232_8392_2_847_2_970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbf1/9935/97d41f3af72bb8201d019fdd25e31a2a"
              }}
              style={styles.ImageBackground_I232_8392_2_847_2_971}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_232_8393}>
        <View style={styles.View_I232_8393_2_843} />
        <View style={styles.View_I232_8393_2_844}>
          <View style={styles.View_I232_8393_2_845}>
            <Text style={styles.Text_I232_8393_2_845}>CAD</Text>
          </View>
          <View style={styles.View_I232_8393_2_846}>
            <Text style={styles.Text_I232_8393_2_846}>Canadian Dollar</Text>
          </View>
        </View>
        <View style={styles.View_I232_8393_2_847}>
          <View style={styles.View_I232_8393_2_847_2_973}>
            <View style={styles.View_I232_8393_2_847_2_974} />
            <View style={styles.View_I232_8393_2_847_2_975} />
            <View style={styles.View_I232_8393_2_847_2_976} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c256/4ac2/23ac423307327ce194b0fefc5a799fa0"
              }}
              style={styles.ImageBackground_I232_8393_2_847_2_977}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_232_8394}>
        <View style={styles.View_I232_8394_2_843} />
        <View style={styles.View_I232_8394_2_844}>
          <View style={styles.View_I232_8394_2_845}>
            <Text style={styles.Text_I232_8394_2_845}>AXS</Text>
          </View>
          <View style={styles.View_I232_8394_2_846}>
            <Text style={styles.Text_I232_8394_2_846}>Axie Infinity</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a8/7441/48692470b484652b8f40f36224771b78"
          }}
          style={styles.ImageBackground_I232_8394_2_847}
        />
      </View>
      <View style={styles.View_232_8395}>
        <View style={styles.View_I232_8395_2_843} />
        <View style={styles.View_I232_8395_2_844}>
          <View style={styles.View_I232_8395_2_845}>
            <Text style={styles.Text_I232_8395_2_845}>AUTO</Text>
          </View>
          <View style={styles.View_I232_8395_2_846}>
            <Text style={styles.Text_I232_8395_2_846}>Auto</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a8/7441/48692470b484652b8f40f36224771b78"
          }}
          style={styles.ImageBackground_I232_8395_2_847}
        />
      </View>
      <View style={styles.View_232_8396}>
        <View style={styles.View_I232_8396_2_843} />
        <View style={styles.View_I232_8396_2_844}>
          <View style={styles.View_I232_8396_2_845}>
            <Text style={styles.Text_I232_8396_2_845}>1 INCH</Text>
          </View>
          <View style={styles.View_I232_8396_2_846}>
            <Text style={styles.Text_I232_8396_2_846}>1 Inch</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a8/7441/48692470b484652b8f40f36224771b78"
          }}
          style={styles.ImageBackground_I232_8396_2_847}
        />
      </View>
      <View style={styles.View_232_8398}>
        <View style={styles.View_I232_8398_2_843} />
        <View style={styles.View_I232_8398_2_844}>
          <View style={styles.View_I232_8398_2_845}>
            <Text style={styles.Text_I232_8398_2_845}>AXS</Text>
          </View>
          <View style={styles.View_I232_8398_2_846}>
            <Text style={styles.Text_I232_8398_2_846}>Axie Infinity</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a8/7441/48692470b484652b8f40f36224771b78"
          }}
          style={styles.ImageBackground_I232_8398_2_847}
        />
      </View>
      <View style={styles.View_232_8399}>
        <View style={styles.View_I232_8399_2_849}>
          <View style={styles.View_I232_8399_2_850} />
          <View style={styles.View_I232_8399_2_851}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a7e/4a9c/8a3320b25349ffc6cfbff882c8e79967"
              }}
              style={styles.ImageBackground_I232_8399_2_852}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/f0ea/31ef8a35eaf72c79bdb787b071f5779f"
              }}
              style={styles.ImageBackground_I232_8399_2_855}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b895/4f73/e89b1bd2e18d22af3d0563c827767387"
              }}
              style={styles.ImageBackground_I232_8399_2_861}
            />
            <View style={styles.View_I232_8399_2_862}>
              <Text style={styles.Text_I232_8399_2_862}>Go</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8215/0a1a/caef1e66063044694c7143277d766a84"
              }}
              style={styles.ImageBackground_I232_8399_2_863}
            />
            <View style={styles.View_I232_8399_2_864}>
              <Text style={styles.Text_I232_8399_2_864}>space</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/054c/3d35/067f045964d18cecb131fec7c0e63901"
              }}
              style={styles.ImageBackground_I232_8399_2_865}
            />
            <View style={styles.View_I232_8399_2_866}>
              <Text style={styles.Text_I232_8399_2_866}>123</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db92/3dfc/8246bd1c530451c49f8e8eca184b206e"
              }}
              style={styles.ImageBackground_I232_8399_2_867}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f370/527d/be54dc36bb4841693ca8e0d1a76afd09"
              }}
              style={styles.ImageBackground_I232_8399_2_868}
            />
            <View style={styles.View_I232_8399_2_872} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1068/c0e1/401040105b729c83f1a2fe4c8a4d54ba"
              }}
              style={styles.ImageBackground_I232_8399_2_873}
            />
            <View style={styles.View_I232_8399_2_874} />
            <View style={styles.View_I232_8399_2_875}>
              <Text style={styles.Text_I232_8399_2_875}>M</Text>
            </View>
            <View style={styles.View_I232_8399_2_876} />
            <View style={styles.View_I232_8399_2_877}>
              <Text style={styles.Text_I232_8399_2_877}>N</Text>
            </View>
            <View style={styles.View_I232_8399_2_878} />
            <View style={styles.View_I232_8399_2_879}>
              <Text style={styles.Text_I232_8399_2_879}>B</Text>
            </View>
            <View style={styles.View_I232_8399_2_880} />
            <View style={styles.View_I232_8399_2_881}>
              <Text style={styles.Text_I232_8399_2_881}>V</Text>
            </View>
            <View style={styles.View_I232_8399_2_882} />
            <View style={styles.View_I232_8399_2_883}>
              <Text style={styles.Text_I232_8399_2_883}>C</Text>
            </View>
            <View style={styles.View_I232_8399_2_884} />
            <View style={styles.View_I232_8399_2_885}>
              <Text style={styles.Text_I232_8399_2_885}>X</Text>
            </View>
            <View style={styles.View_I232_8399_2_886} />
            <View style={styles.View_I232_8399_2_887}>
              <Text style={styles.Text_I232_8399_2_887}>Z</Text>
            </View>
            <View style={styles.View_I232_8399_2_888} />
            <View style={styles.View_I232_8399_2_889}>
              <Text style={styles.Text_I232_8399_2_889}>L</Text>
            </View>
            <View style={styles.View_I232_8399_2_890} />
            <View style={styles.View_I232_8399_2_891}>
              <Text style={styles.Text_I232_8399_2_891}>K</Text>
            </View>
            <View style={styles.View_I232_8399_2_892} />
            <View style={styles.View_I232_8399_2_893}>
              <Text style={styles.Text_I232_8399_2_893}>J</Text>
            </View>
            <View style={styles.View_I232_8399_2_894} />
            <View style={styles.View_I232_8399_2_895}>
              <Text style={styles.Text_I232_8399_2_895}>H</Text>
            </View>
            <View style={styles.View_I232_8399_2_896} />
            <View style={styles.View_I232_8399_2_897}>
              <Text style={styles.Text_I232_8399_2_897}>G</Text>
            </View>
            <View style={styles.View_I232_8399_2_898} />
            <View style={styles.View_I232_8399_2_899}>
              <Text style={styles.Text_I232_8399_2_899}>F</Text>
            </View>
            <View style={styles.View_I232_8399_2_900} />
            <View style={styles.View_I232_8399_2_901}>
              <Text style={styles.Text_I232_8399_2_901}>D</Text>
            </View>
            <View style={styles.View_I232_8399_2_902} />
            <View style={styles.View_I232_8399_2_903}>
              <Text style={styles.Text_I232_8399_2_903}>S</Text>
            </View>
            <View style={styles.View_I232_8399_2_904} />
            <View style={styles.View_I232_8399_2_905}>
              <Text style={styles.Text_I232_8399_2_905}>A</Text>
            </View>
            <View style={styles.View_I232_8399_2_906} />
            <View style={styles.View_I232_8399_2_907}>
              <Text style={styles.Text_I232_8399_2_907}>P</Text>
            </View>
            <View style={styles.View_I232_8399_2_908} />
            <View style={styles.View_I232_8399_2_909}>
              <Text style={styles.Text_I232_8399_2_909}>O</Text>
            </View>
            <View style={styles.View_I232_8399_2_910} />
            <View style={styles.View_I232_8399_2_911}>
              <Text style={styles.Text_I232_8399_2_911}>I</Text>
            </View>
            <View style={styles.View_I232_8399_2_912} />
            <View style={styles.View_I232_8399_2_913}>
              <Text style={styles.Text_I232_8399_2_913}>U</Text>
            </View>
            <View style={styles.View_I232_8399_2_914} />
            <View style={styles.View_I232_8399_2_915}>
              <Text style={styles.Text_I232_8399_2_915}>Y</Text>
            </View>
            <View style={styles.View_I232_8399_2_916} />
            <View style={styles.View_I232_8399_2_917}>
              <Text style={styles.Text_I232_8399_2_917}>T</Text>
            </View>
            <View style={styles.View_I232_8399_2_918} />
            <View style={styles.View_I232_8399_2_919}>
              <Text style={styles.Text_I232_8399_2_919}>R</Text>
            </View>
            <View style={styles.View_I232_8399_2_920} />
            <View style={styles.View_I232_8399_2_921}>
              <Text style={styles.Text_I232_8399_2_921}>E</Text>
            </View>
            <View style={styles.View_I232_8399_2_922} />
            <View style={styles.View_I232_8399_2_923}>
              <Text style={styles.Text_I232_8399_2_923}>W</Text>
            </View>
            <View style={styles.View_I232_8399_2_924} />
            <View style={styles.View_I232_8399_2_925}>
              <Text style={styles.Text_I232_8399_2_925}>Q</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I232_8399_2_926}>
          <View style={styles.View_I232_8399_2_926_2_45} />
        </View>
      </View>
      <View style={styles.View_232_8400}>
        <View style={styles.View_232_8401}>
          <View style={styles.View_I232_8401_2_638}>
            <Text style={styles.Text_I232_8401_2_638}>Crypto</Text>
          </View>
        </View>
        <View style={styles.View_232_8402}>
          <View style={styles.View_I232_8402_2_640}>
            <Text style={styles.Text_I232_8402_2_640}>Cash</Text>
          </View>
          <View style={styles.View_I232_8402_2_641}>
            <View style={styles.View_I232_8402_2_642} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6228/53ba/f0983f053a5c93f3ea591a10897c969c"
              }}
              style={styles.ImageBackground_I232_8402_2_643}
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
  View_232_8386: {
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
  View_I232_8386_2_5: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I232_8386_2_6: {
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
  ImageBackground_I232_8386_2_7: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I232_8386_2_8: {
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
  ImageBackground_I232_8386_2_9: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  ImageBackground_I232_8386_2_13: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  View_I232_8386_2_18: {
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
  View_I232_8386_2_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8386_2_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_232_8387: {
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
  View_I232_8387_2_111: {
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
  View_I232_8387_2_112: {
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
  View_I232_8387_2_113: {
    width: wp("39%"),
    minWidth: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8387_2_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I232_8387_2_114: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I232_8387_2_115: {
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
  View_232_8388: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8388_2_645: {
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
  View_I232_8388_2_646: {
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
  View_I232_8388_2_647: {
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
  ImageBackground_I232_8388_2_647_2_123: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I232_8388_2_647_2_126: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I232_8388_2_648: {
    width: wp("67%"),
    minWidth: wp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8388_2_648: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_8389: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8389_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  TouchableOpacity_I232_8389_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8389_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8389_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8389_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8389_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8389_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8389_2_847_2_928: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8389_2_847_2_929: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 248, 251, 1)"
  },
  View_I232_8389_2_847_2_930: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(43, 159, 90, 1)"
  },
  View_I232_8389_2_847_2_931: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(39, 39, 39, 1)"
  },
  View_I232_8389_2_847_2_932: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(220, 37, 28, 1)"
  },
  View_232_8390: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8390_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8390_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8390_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8390_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8390_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8390_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8390_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8390_2_847_2_934: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8390_2_847_2_935: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 248, 251, 1)"
  },
  View_I232_8390_2_847_2_936: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(160, 192, 241, 1)"
  },
  View_I232_8390_2_847_2_937: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(160, 192, 241, 1)"
  },
  ImageBackground_I232_8390_2_847_2_938: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_232_8391: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8391_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8391_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8391_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8391_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8391_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8391_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8391_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8391_2_847_2_940: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8391_2_847_2_941: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(65, 71, 155, 1)"
  },
  View_I232_8391_2_847_2_942: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I232_8391_2_847_2_943: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I232_8391_2_847_2_944: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I232_8391_2_847_2_945: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I232_8391_2_847_2_948: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I232_8391_2_847_2_954: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I232_8391_2_847_2_955: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I232_8391_2_847_2_956: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I232_8391_2_847_2_957: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I232_8391_2_847_2_958: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I232_8391_2_847_2_959: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I232_8391_2_847_2_960: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I232_8391_2_847_2_961: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_232_8392: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8392_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8392_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8392_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8392_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8392_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8392_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8392_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8392_2_847_2_963: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(43, 159, 90, 1)",
    overflow: "hidden"
  },
  ImageBackground_I232_8392_2_847_2_964: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I232_8392_2_847_2_965: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I232_8392_2_847_2_966: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I232_8392_2_847_2_969: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I232_8392_2_847_2_970: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I232_8392_2_847_2_971: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_232_8393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8393_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8393_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8393_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8393_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8393_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8393_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8393_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8393_2_847_2_973: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8393_2_847_2_974: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 248, 251, 1)"
  },
  View_I232_8393_2_847_2_975: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(227, 29, 28, 1)"
  },
  View_I232_8393_2_847_2_976: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(227, 29, 28, 1)"
  },
  ImageBackground_I232_8393_2_847_2_977: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_232_8394: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8394_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8394_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8394_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8394_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8394_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8394_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8394_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_232_8395: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8395_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8395_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8395_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8395_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8395_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8395_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8395_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_232_8396: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8396_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8396_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8396_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8396_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8396_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8396_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8396_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_232_8398: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8398_2_843: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 40, 71, 1)"
  },
  View_I232_8398_2_844: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I232_8398_2_845: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I232_8398_2_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8398_2_846: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I232_8398_2_846: {
    color: "rgba(116, 120, 149, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8398_2_847: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_232_8399: {
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
  View_I232_8399_2_849: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I232_8399_2_850: {
    width: wp("100%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(13, 13, 15, 1)"
  },
  View_I232_8399_2_851: {
    width: wp("95%"),
    height: hp("35%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I232_8399_2_852: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I232_8399_2_855: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I232_8399_2_861: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_I232_8399_2_862: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8399_2_863: {
    width: wp("47%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_I232_8399_2_864: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_864: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8399_2_865: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I232_8399_2_866: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I232_8399_2_867: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I232_8399_2_868: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_I232_8399_2_872: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  ImageBackground_I232_8399_2_873: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I232_8399_2_874: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_875: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_875: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_876: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_877: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_877: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_878: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_879: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_879: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_880: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_881: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_881: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_882: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_883: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_883: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_884: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_885: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_885: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_886: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_887: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_887: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_888: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_889: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_889: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_890: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_891: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_891: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_892: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_893: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_893: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_894: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_895: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_896: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_897: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_897: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_898: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_899: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_899: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_900: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_901: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_902: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_903: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_904: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_905: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_905: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_906: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_907: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_907: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_908: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_909: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_910: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_911: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_911: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_912: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_913: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_914: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_915: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_915: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_916: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_917: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_917: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_918: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_919: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_919: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_920: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_921: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_922: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_923: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_923: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_924: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(32, 40, 50, 1)"
  },
  View_I232_8399_2_925: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8399_2_925: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8399_2_926: {
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
  View_I232_8399_2_926_2_45: {
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
  View_232_8400: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  View_232_8401: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8401_2_638: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I232_8401_2_638: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_8402: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I232_8402_2_640: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I232_8402_2_640: {
    color: "rgba(50, 160, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I232_8402_2_641: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_I232_8402_2_642: {
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
  ImageBackground_I232_8402_2_643: {
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
