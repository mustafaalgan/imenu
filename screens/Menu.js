// import React from 'react';
// import { Divider, FAB, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
// import { Fetch } from 'react-request';
// const Menu = props => {
//     const { theme } = props
//     return (
//         <ScreenContainer hasSafeArea={true} scrollable={false}>
//             <View style={styles.View_3a} accessible={true} importantForAccessibility="auto" hitSlop={{}} pointerEvents="auto">
//                 <View style={styles.ViewjK} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                     <Text style={StyleSheet.flatten([theme.typography.headline4, { color: theme.colors.strong }])}>
//                         Cryptocurrencies
//                     </Text>
//                     <Touchable style={styles.TouchableNy}>
//                         <Text style={StyleSheet.flatten([theme.typography.headline6, { color: theme.colors.primary }])}>
//                             See All
//                         </Text>
//                     </Touchable>
//                 </View>
//                 <View style={styles.View_0x} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                     <Fetch
//                         url={`https://example-data.draftbit.com/crypto?_limit=10`}
//                         headers={{ "Accept": "application/json", "Content-Type": "application/json" }}
//                     >
//                         {({ loading, error, data, refetch }) => {
//                             if (loading) {
//                                 return (null)
//                             }
//                             if (error) {
//                                 return (null)
//                             }
//                             if (!data) {
//                                 return (null)
//                             }
//                             return (<FlatList renderItem={({ item }) =>
//                                 <View accessible={true} importantForAccessibility="auto" hitSlop={{}} pointerEvents="auto">
//                                     <Touchable  >
//                                         <View style={styles.View_5I} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                             <View style={styles.Viewan} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                 <View style={StyleSheet.flatten([styles.ViewxY, { backgroundColor: theme.colors.divider, borderColor: theme.colors.light, borderRadius: theme.borderRadius.global }])} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                     <Text style={StyleSheet.flatten([theme.typography.caption, { color: theme.colors.medium }])}>
//                                                         {item && item["symbol"]}
//                                                     </Text>
//                                                 </View>
//                                                 <View style={styles.ViewpS} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                     <Text style={StyleSheet.flatten([theme.typography.body1, { color: theme.colors.strong }])}>
//                                                         {item && item["name"]}
//                                                     </Text>
//                                                     <View style={styles.Viewa0} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                         <View style={styles.ViewVa} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                             <View style={styles.ViewmV} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                                 <Text style={StyleSheet.flatten([theme.typography.caption, { color: theme.colors.light }])}>
//                                                                     1D
//                                                                 </Text>
//                                                             </View>
//                                                             <Text style={StyleSheet.flatten([theme.typography.caption, { color: theme.colors.light }])}>
//                                                                 {item && item["%_change_1h"]}
//                                                                 <Text  >
//                                                                     %
//                                                                 </Text>
//                                                             </Text>
//                                                         </View>
//                                                         <View style={styles.ViewIZ} hitSlop={{}} pointerEvents="auto" accessible={true} importantForAccessibility="auto">
//                                                             <View style={styles.ViewT4} accessible={true} importantForAccessibility="auto" hitSlop={{}} pointerEvents="auto">
//                                                                 <Text style={StyleSheet.flatten([theme.typography.caption, { color: theme.colors.light }])}>
//                                                                     24H
//                                                                 </Text>
//                                                             </View>
//                                                             <Text style={StyleSheet.flatten([theme.typography.caption, { color: theme.colors.light }])}>
//                                                                 {item && item["%_change_24h"]}
//                                                                 <Text  >
//                                                                     %
//                                                                 </Text>
//                                                             </Text>
//                                                         </View>
//                                                     </View>
//                                                 </View>
//                                             </View>
//                                             <View style={styles.ViewGf} pointerEvents="auto" hitSlop={{}} importantForAccessibility="auto" accessible={true}>
//                                                 <Text style={StyleSheet.flatten([theme.typography.body2, { color: theme.colors.primary }])}>
//                                                     $
//                                                 </Text>
//                                                 <Text style={StyleSheet.flatten([theme.typography.body2, { color: theme.colors.primary }])}>
//                                                     {item && item["price"]}
//                                                 </Text>
//                                             </View>
//                                         </View>
//                                         <Divider style={styles.Dividery4} height={1} color={theme.colors.divider} />
//                                     </Touchable>
//                                 </View>
//                             } numColumns={1} data={data} />)
//                         }}
//                     </Fetch>
//                 </View>
//             </View>
//             <FAB style={StyleSheet.flatten([styles.FABTG, { borderRadius: theme.borderRadius.global }])} type="fixed" label="GET STARTED" />
//         </ScreenContainer>
//     )
// }
// const styles = StyleSheet.create({
//     View_3a: {
//         paddingLeft: 32, paddingRight: 32, paddingBottom: 34, paddingTop: 34, paddingTop: 32, marginBottom: 64
//     }, ViewjK: {
//         flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 24
//     }, View_5I: {
//         flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 8, paddingTop: 8
//     }, Viewan: {
//         flexDirection: "row", alignItems: "flex-start", width: "75%", marginRight: 14
//     }, ViewxY: {
//         justifyContent: "center", alignItems: "center", minWidth: 48, minHeight: 48, maxWidth: 48, maxHeight: 48, marginRight: 14
//     }, ViewVa: {
//         marginRight: 18, flexDirection: "row", alignItems: "center"
//     }, ViewmV: {
//         marginRight: 6
//     }, ViewT4: {
//         marginRight: 6
//     }, ViewGf: {
//         flexDirection: "row", justifyContent: "flex-end", alignItems: "center"
//     }, ViewpS: {
//         alignSelf: "stretch"
//     }, Viewa0: {
//         width: "100%", flexDirection: "row", alignItems: "center", marginTop: 4
//     }, Dividery4: {
//         height: 1, marginTop: 8, marginBottom: 8
//     }, ViewIZ: {
//         alignItems: "center", marginRight: 18, flexDirection: "row"
//     }, FABTG: {
//         position: "absolute", bottom: 24, right: 32, left: 32, alignSelf: "stretch"
//     }, View_0x: {
//         marginBottom: 80, paddingBottom: 40
//     }, TouchableNy: {
//         alignSelf: "flex-end", justifyContent: "center", alignItems: "center"
//     }
// })
// export default withTheme(Menu);