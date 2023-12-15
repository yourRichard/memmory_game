

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, Container, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Text_ddc1bb33bce01079ba4d9e4348362a4a () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_219cde0c9b8849c707d1ccba2e94e0de = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(7),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_219cde0c9b8849c707d1ccba2e94e0de} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(7).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_2f9050fc55ad351ac079829a1209c39c () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_433501462bcc8080c8ca5ad511c0151d = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(2),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_433501462bcc8080c8ca5ad511c0151d} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(2).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_cdb138e02dd9798599393d66714b5f8f () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_b8c319820411a2ae4c6d3383aaeb45bd = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(8),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_b8c319820411a2ae4c6d3383aaeb45bd} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(8).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_6cd3b4fc20df0fe5b0363f361d322e6a () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_78f0628cb72c3fb62f0340afbaa834e0 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(6),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_78f0628cb72c3fb62f0340afbaa834e0} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(6).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_24a05b50345b714a23ba5c403685d71a () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_09c99b99be15bd0d9692d19ef92594fa = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(5),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_09c99b99be15bd0d9692d19ef92594fa} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(5).at(1)}}>
  {`🥳`}
</Text>
  )
}

export function Text_301ba2c829842abc0f4c6013c7d77a17 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "25px", "fontWeight": "bold", "color": "black"}}>
  {state__state.result}
</Text>
  )
}

export function Text_304f49513d7c558c26f75dd64b7fe2b9 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_33c71dc388b318f87f56b17d8fedd63b = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(10),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_33c71dc388b318f87f56b17d8fedd63b} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(10).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_5b81ed97f4998a5861433bfd9405b009 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_dacc7a49d3ef53dfaae18ea7f512bacd = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(9),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_dacc7a49d3ef53dfaae18ea7f512bacd} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(9).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_ff94acbb041111976b45a0b27264c738 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_d3deb63fa011798697b508ac381e77b5 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(1),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_d3deb63fa011798697b508ac381e77b5} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(1).at(1)}}>
  {`🥳`}
</Text>
  )
}

export function Text_9d1f153a287db5c516f31e4583512755 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_475eca3b9b104f309f211f76d4cc6645 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(14),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_475eca3b9b104f309f211f76d4cc6645} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(14).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Button_206494fe825da846ac4120a7af6cd933 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ca4a0c2fe357773982de46f3247f7495 = useCallback((_e) => addEvents([Event("state.state.reset_game", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`teal`} onClick={on_click_ca4a0c2fe357773982de46f3247f7495} sx={{"width": "150px", "height": "40px", "margin": "15px", "color": "white", "fontSize": "16px", "cursor": "pointer"}}>
  {`Reset Game`}
</Button>
  )
}

export function Text_d52dbb4dc123b7d493017acbca215ec0 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0b1cc91a52da7bfdb3f89ff07985ba7c = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(11),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_0b1cc91a52da7bfdb3f89ff07985ba7c} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(11).at(1)}}>
  {`🥳`}
</Text>
  )
}

export function Text_efa3d00d5e25573b08fa58c1e689b1d2 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2608e6014df95fdc5dc116563b802eac = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(15),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_2608e6014df95fdc5dc116563b802eac} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(15).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_331775aa0b8cb133c847c8ce350b1c76 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_294752dd33a0d643e1bfba0e733c182b = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(3),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_294752dd33a0d643e1bfba0e733c182b} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(3).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_9003fe0096bd6852cb8e122d25b05605 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_e8c9084cb6ad63e98494a7a9a1e268c2 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(12),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_e8c9084cb6ad63e98494a7a9a1e268c2} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(12).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_26532c3bb62bd72f0e41f00f9ba43760 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_43b0518bdb3a8949d6b91eec46e12e8f = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(13),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_43b0518bdb3a8949d6b91eec46e12e8f} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(13).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_78d39f4f745906cba21f3f1178c88e95 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_fec5bddd4f693f459cd28d15a25d247d = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(4),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_fec5bddd4f693f459cd28d15a25d247d} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(4).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_0070b52b46734b1a7e1cb43ef8efb5a7 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_e473135e6c3cd3ac060c18118b53cd35 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(0),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_e473135e6c3cd3ac060c18118b53cd35} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(0).at(1)}}>
  {`🥳`}
</Text>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Container sx={{"bg": "#e0e0e0", "height": "100vh", "maxWidth": "auto", "display": "grid", "position": "relative", "overlay": "hidden", "placeItems": "center"}}>
  <VStack spacing={`25px`}>
  <Text sx={{"fontSize": "50px", "fontWeight": "bold", "color": "black"}}>
  {`Memory game with nextpy`}
</Text>
  <Spacer/>
  <VStack spacing={`15px`}>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_0070b52b46734b1a7e1cb43ef8efb5a7/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_ff94acbb041111976b45a0b27264c738/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_2f9050fc55ad351ac079829a1209c39c/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_331775aa0b8cb133c847c8ce350b1c76/>
</Container>
</HStack>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_78d39f4f745906cba21f3f1178c88e95/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_24a05b50345b714a23ba5c403685d71a/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_6cd3b4fc20df0fe5b0363f361d322e6a/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_ddc1bb33bce01079ba4d9e4348362a4a/>
</Container>
</HStack>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_cdb138e02dd9798599393d66714b5f8f/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_5b81ed97f4998a5861433bfd9405b009/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_304f49513d7c558c26f75dd64b7fe2b9/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_d52dbb4dc123b7d493017acbca215ec0/>
</Container>
</HStack>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_9003fe0096bd6852cb8e122d25b05605/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_26532c3bb62bd72f0e41f00f9ba43760/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_9d1f153a287db5c516f31e4583512755/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_efa3d00d5e25573b08fa58c1e689b1d2/>
</Container>
</HStack>
</VStack>
  <Spacer/>
  <Button_206494fe825da846ac4120a7af6cd933/>
  <Text_301ba2c829842abc0f4c6013c7d77a17/>
</VStack>
</Container>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
