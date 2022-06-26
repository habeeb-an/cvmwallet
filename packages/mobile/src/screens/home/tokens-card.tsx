import React, { FunctionComponent, useState } from 'react'
import { Card, CardBody } from '../../components/card'
import { SectionList, StyleSheet, View, ViewStyle } from 'react-native'
import { Image, Text, Tab } from '@rneui/base'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores'
import { TokenItem } from '../tokens'
import { useSmartNavigation } from '../../navigation.provider'
import { RectButton } from '../../components/rect-button'
import { colors, metrics, spacing, typography } from '../../themes'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { formatContractAddress, _keyExtract } from '../../utils/helper'
import { DownArrowIcon } from '../../components/icon'

const nftsData = [
  {
    title: 'NFT721',
    data: [
      {
        uri: 'https://picsum.photos/id/1002/200',
        title: 'The Empire State Building',
        oraiPrice: '49.14 ORAI'
      },
      {
        uri: 'https://picsum.photos/id/1002/200',
        title: 'The Empire State Building',
        oraiPrice: '49.14 ORAI'
      },
      {
        uri: 'https://picsum.photos/id/1002/200',
        title: 'The Empire State Building',
        oraiPrice: '49.14 ORAI'
      }
    ]
  },
  {
    title: 'NFT1155',
    data: [
      {
        uri: 'https://picsum.photos/id/1002/200',
        title: 'The Empire State Building',
        oraiPrice: '49.14 ORAI'
      },
      {
        uri: 'https://picsum.photos/id/1002/200',
        title: 'The Empire State Building',
        oraiPrice: '49.14 ORAI'
      },
      {
        uri: 'https://picsum.photos/id/1002/200',
        title: 'The Empire State Building',
        oraiPrice: '49.14 ORAI'
      }
    ]
  }
]

const _renderSectionItem = ({ item, section }) => {
  return <View />
}

const _renderFlatlistItem = ({ item }) => (
  <View style={styles.flatListItem}>
    <Image
      source={{
        uri: item.uri
      }}
      style={styles.itemPhoto}
      resizeMode="cover"
    />
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: spacing['12'],
        alignItems: 'flex-start'
      }}
    >
      <Text
        style={{
          ...typography.h7,
          color: colors['gray-900'],
          fontWeight: '900'
        }}
      >
        {formatContractAddress(item.title)}
      </Text>

      <Text
        style={{
          ...typography.h5,
          color: colors['gray-900'],
          fontWeight: '900'
        }}
      >
        {item.oraiPrice}
      </Text>

      <Text
        style={{
          ...typography.h5,
          color: colors['gray-900'],
          fontWeight: '900'
        }}
      >{`$ ${58.23}`}</Text>
    </View>
  </View>
)

export const TokensCard: FunctionComponent<{
  containerStyle?: ViewStyle
}> = observer(({ containerStyle }) => {
  const { chainStore, queriesStore, accountStore } = useStore()

  const smartNavigation = useSmartNavigation()
  const [index, setIndex] = useState<number>(0)

  const queryBalances = queriesStore
    .get(chainStore.current.chainId)
    .queryBalances.getQueryBech32Address(
      accountStore.getAccount(chainStore.current.chainId).bech32Address
    )

  const tokens = queryBalances.positiveNativeUnstakables
    .concat(queryBalances.nonNativeBalances)
    .slice(0, 2)

  return (
    <View style={containerStyle}>
      <Card
        style={{
          marginTop: spacing['32'],
          paddingBottom: spacing['14'],
          borderRadius: spacing['24']
        }}
      >
        <Tab
          value={index}
          onChange={e => {
            setIndex(e)
          }}
          indicatorStyle={{
            height: spacing['1'],
            backgroundColor: colors['black']
          }}
          variant="default"
          containerStyle={{
            width: metrics.screenWidth - 64,
            marginHorizontal: spacing['32'],
            justifyContent: 'space-between'
          }}
        >
          {['Tokens', 'NFTs'].map((title: string, index: number) => (
            <Tab.Item
              key={index}
              title={title}
              titleStyle={active => ({
                fontSize: 14,
                color: active ? colors['gray-900'] : colors['gray-600']
              })}
              containerStyle={{
                backgroundColor: colors['transparent']
              }}
              variant="default"
            />
          ))}
        </Tab>
        {index === 0 ? (
          <CardBody>
            {tokens.map(token => {
              return (
                <TokenItem
                  key={token.currency.coinMinimalDenom}
                  chainInfo={{
                    stakeCurrency: chainStore.current.stakeCurrency
                  }}
                  balance={token.balance}
                />
              )
            })}
          </CardBody>
        ) : (
          <CardBody>
            <SectionList
              contentContainerStyle={{ paddingHorizontal: 10 }}
              stickySectionHeadersEnabled={false}
              sections={nftsData}
              renderSectionHeader={({ section }) => (
                <>
                  <View
                    style={{
                      marginTop: spacing['24'],
                      flexDirection: 'row'
                    }}
                  >
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                    <DownArrowIcon color={colors['black']} height={44} />
                  </View>

                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={_renderFlatlistItem}
                    keyExtractor={_keyExtract}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={<View style={{ width: 12 }} />}
                    ListFooterComponent={<View style={{ width: 12 }} />}
                  />
                </>
              )}
              renderItem={() => <View />}
            />
          </CardBody>
        )}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors['white']
          }}
        >
          <RectButton
            style={styles.containerBtn}
            onPress={() => {
              smartNavigation.navigateSmart('Tokens', {})
            }}
          >
            <Text style={styles.textLoadMore}>View all</Text>
          </RectButton>
        </View>
      </Card>
    </View>
  )
})

const styles = StyleSheet.create({
  textLoadMore: {
    ...typography['text-button3'],
    textTransform: 'capitalize',
    color: colors['gray-800']
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['gray-50'],
    width: metrics.screenWidth - 48,
    height: spacing['40'],
    paddingVertical: spacing['10'],
    borderRadius: spacing['12']
  },
  sectionHeader: {
    ...typography.h7,
    color: colors['gray-800'],
    marginBottom: spacing['8'],
    marginRight: spacing['10']
  },
  flatListItem: {
    backgroundColor: colors['gray-50'],
    borderRadius: spacing['12'],
    width: (metrics.screenWidth - 60) / 2,
    marginRight: spacing['12'],
    padding: spacing['12']
  },
  itemPhoto: {
    width: (metrics.screenWidth - 84) / 2,
    height: (metrics.screenWidth - 84) / 2,
    borderRadius: spacing['6']
  },
  itemText: {
    color: colors['gray-800']
  }
})
