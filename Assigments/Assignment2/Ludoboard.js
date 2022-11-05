import React from "react";

import { View, StyleSheet } from "react-native";

function Ludo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={[{ backgroundColor: "blue" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "#0047AB",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 150,
            width: 75,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />

          <View style={styles.smallBox} />

          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />

          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />

          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />

          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />

          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />

          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
        </View>

        <View style={[{ backgroundColor: "yellow" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "orange",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 75,
            width: 150,
            flexDirection: "row",

            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />

          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />

          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />

          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />

          <View style={[styles.smallBox, { backgroundColor: "blue" }]} />

          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "red" }]} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
        </View>

        <View
          style={{
            width: 75,
            height: 75,
            backgroundColor: "#fff",
            flexDirection:"row",
            flexWrap:"wrap",
            borderWidth:25,
            borderRadius:15,
            borderLeftColor:"blue",
            borderTopColor:"yellow",
            borderRightColor:"green",
            borderBottomColor:"red"
            
          }}
        >
            
        </View>

        <View
          style={{
            height: 75,
            width: 150,
            flexDirection: "row",

            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "yellow" }]} />

          <View style={styles.smallBox} />

          <View style={styles.smallBox} />
          
          <View style={[styles.smallBox, { backgroundColor: "green" }]} />

          <View style={[styles.smallBox, { backgroundColor: "green" }]} />

          <View style={[styles.smallBox, { backgroundColor: "green" }]} />

          <View style={[styles.smallBox, { backgroundColor: "green" }]} />

          <View style={[styles.smallBox, { backgroundColor: "green" }]} />
          <View style={styles.smallBox} />
          
          <View style={styles.smallBox}/>
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "green" }]} />

          <View style={styles.smallBox} />
        </View>



        <View style={[{ backgroundColor: "red" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "tomato",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 150,
            width: 75,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />

          <View style={styles.smallBox} />

          <View style={[styles.smallBox, { backgroundColor: "red" }]} />

          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "red" }]} />

          <View style={[styles.smallBox, { backgroundColor: "red" }]} />

          <View style={[styles.smallBox, { backgroundColor: "red" }]} />

          <View style={[styles.smallBox, { backgroundColor: "red" }]} />

          <View style={[styles.smallBox, { backgroundColor: "red" }]} />
          <View style={styles.smallBox} />

          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
          <View style={[styles.smallBox, { backgroundColor: "green" }]} />

          <View style={styles.smallBox} />
          <View style={styles.smallBox} />
        </View>




        <View style={[{ backgroundColor: "green" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "#50C878",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    backgroundColor: "grey",
    width: 375,
    height: 375,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  smallBox: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: 1,
    padding: 0,
    margin: 0,
  },
});

export default Ludo;
