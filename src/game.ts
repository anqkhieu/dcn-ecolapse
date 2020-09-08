import utils from "../node_modules/decentraland-ecs-utils/index"
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'

import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../1a7b94e0-ac62-4539-bb08-65f4fc4d66ac/src/item"
import Script3 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(26, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/Bush_02/Bush_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
bush.addComponentOrReplace(gltfShape2)

const evergreenShrub = new Entity('evergreenShrub')
engine.addEntity(evergreenShrub)
evergreenShrub.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(26, 0, 10.5),
  rotation: new Quaternion(0, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/Bush_03/Bush_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
evergreenShrub.addComponentOrReplace(gltfShape3)

const lightYellowRoundedPineTree = new Entity('lightYellowRoundedPineTree')
engine.addEntity(lightYellowRoundedPineTree)
lightYellowRoundedPineTree.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(26, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
lightYellowRoundedPineTree.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("models/TreePine_03/TreePine_03.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
lightYellowRoundedPineTree.addComponentOrReplace(gltfShape4)

const lightYellowRoundedPineTree2 = new Entity('lightYellowRoundedPineTree2')
engine.addEntity(lightYellowRoundedPineTree2)
lightYellowRoundedPineTree2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49000000953674316, 0.49000000953674316, 0.49000000953674316)
})
lightYellowRoundedPineTree2.addComponentOrReplace(transform9)
lightYellowRoundedPineTree2.addComponentOrReplace(gltfShape4)

const lightYellowRoundedPineTree3 = new Entity('lightYellowRoundedPineTree3')
engine.addEntity(lightYellowRoundedPineTree3)
lightYellowRoundedPineTree3.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(17.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
lightYellowRoundedPineTree3.addComponentOrReplace(transform10)
lightYellowRoundedPineTree3.addComponentOrReplace(gltfShape4)

const shrub = new Entity('shrub')
engine.addEntity(shrub)
shrub.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(21, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub.addComponentOrReplace(transform11)
const gltfShape5 = new GLTFShape("models/Bush_01/Bush_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
shrub.addComponentOrReplace(gltfShape5)

const sunflowerHead = new Entity('sunflowerHead')
engine.addEntity(sunflowerHead)
sunflowerHead.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(21.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead.addComponentOrReplace(transform12)
const gltfShape6 = new GLTFShape("models/Flower_01/Flower_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
sunflowerHead.addComponentOrReplace(gltfShape6)

const sunflowerHead2 = new Entity('sunflowerHead2')
engine.addEntity(sunflowerHead2)
sunflowerHead2.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(20, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflowerHead2.addComponentOrReplace(transform13)
sunflowerHead2.addComponentOrReplace(gltfShape6)

const sunflower = new Entity('sunflower')
engine.addEntity(sunflower)
sunflower.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(21, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower.addComponentOrReplace(transform14)
const gltfShape7 = new GLTFShape("models/Flower_04/Flower_04.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
sunflower.addComponentOrReplace(gltfShape7)

const sunflower2 = new Entity('sunflower2')
engine.addEntity(sunflower2)
sunflower2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(20.5, 0, 6.5),
  rotation: new Quaternion(8.860399791456633e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
sunflower2.addComponentOrReplace(transform15)
sunflower2.addComponentOrReplace(gltfShape7)

const sunflower3 = new Entity('sunflower3')
engine.addEntity(sunflower3)
sunflower3.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(21, 0, 6.5),
  rotation: new Quaternion(-2.7533761937093004e-8, -0.9238795638084412, 1.2153986972407438e-7, 0.3826834559440613),
  scale: new Vector3(1.0000052452087402, 1, 1.0000052452087402)
})
sunflower3.addComponentOrReplace(transform16)
sunflower3.addComponentOrReplace(gltfShape7)

const pond = new Entity('pond')
engine.addEntity(pond)
pond.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(25, 0, 8),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.48999983072280884, 0.49000000953674316, 0.48999983072280884)
})
pond.addComponentOrReplace(transform17)
const gltfShape8 = new GLTFShape("models/Pond_01/Pond_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
pond.addComponentOrReplace(gltfShape8)

const greenRoundedPineTree = new Entity('greenRoundedPineTree')
engine.addEntity(greenRoundedPineTree)
greenRoundedPineTree.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(19.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
greenRoundedPineTree.addComponentOrReplace(transform18)
const gltfShape9 = new GLTFShape("models/TreePine_01/TreePine_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
greenRoundedPineTree.addComponentOrReplace(gltfShape9)

const greenRoundedPineTree2 = new Entity('greenRoundedPineTree2')
engine.addEntity(greenRoundedPineTree2)
greenRoundedPineTree2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(18.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenRoundedPineTree2.addComponentOrReplace(transform19)
greenRoundedPineTree2.addComponentOrReplace(gltfShape9)

const greenRoundedPineTree3 = new Entity('greenRoundedPineTree3')
engine.addEntity(greenRoundedPineTree3)
greenRoundedPineTree3.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(24, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenRoundedPineTree3.addComponentOrReplace(transform20)
greenRoundedPineTree3.addComponentOrReplace(gltfShape9)

const roundedMediumRock = new Entity('roundedMediumRock')
engine.addEntity(roundedMediumRock)
roundedMediumRock.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(23.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roundedMediumRock.addComponentOrReplace(transform21)
const gltfShape10 = new GLTFShape("models/RockMedium_02/RockMedium_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
roundedMediumRock.addComponentOrReplace(gltfShape10)

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(5, 0, 16.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999986290931702, 1, 0.9999986290931702)
})
greenSycamoreTree.addComponentOrReplace(transform22)
const gltfShape11 = new GLTFShape("models/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
greenSycamoreTree.addComponentOrReplace(gltfShape11)

const greenSycamoreTree2 = new Entity('greenSycamoreTree2')
engine.addEntity(greenSycamoreTree2)
greenSycamoreTree2.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(5.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenSycamoreTree2.addComponentOrReplace(transform23)
greenSycamoreTree2.addComponentOrReplace(gltfShape11)

const lightYellowSycamoreTree = new Entity('lightYellowSycamoreTree')
engine.addEntity(lightYellowSycamoreTree)
lightYellowSycamoreTree.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(3, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightYellowSycamoreTree.addComponentOrReplace(transform24)
const gltfShape12 = new GLTFShape("models/TreeSycamore_02/TreeSycamore_02.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
lightYellowSycamoreTree.addComponentOrReplace(gltfShape12)

const magentaMushroom = new Entity('magentaMushroom')
engine.addEntity(magentaMushroom)
magentaMushroom.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(3, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom.addComponentOrReplace(transform25)
const gltfShape13 = new GLTFShape("models/Mushroom_01/Mushroom_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
magentaMushroom.addComponentOrReplace(gltfShape13)

const magentaMushroom2 = new Entity('magentaMushroom2')
engine.addEntity(magentaMushroom2)
magentaMushroom2.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(2.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom2.addComponentOrReplace(transform26)
magentaMushroom2.addComponentOrReplace(gltfShape13)

const magentaMushroom3 = new Entity('magentaMushroom3')
engine.addEntity(magentaMushroom3)
magentaMushroom3.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(3, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom3.addComponentOrReplace(transform27)
magentaMushroom3.addComponentOrReplace(gltfShape13)

const pointyMediumRock = new Entity('pointyMediumRock')
engine.addEntity(pointyMediumRock)
pointyMediumRock.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(24.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
pointyMediumRock.addComponentOrReplace(transform28)
const gltfShape14 = new GLTFShape("models/RockMedium_01/RockMedium_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
pointyMediumRock.addComponentOrReplace(gltfShape14)

const bigMossyRock = new Entity('bigMossyRock')
engine.addEntity(bigMossyRock)
bigMossyRock.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(22.5, 0, 8.5),
  rotation: new Quaternion(0.5316475629806519, 0.24136288464069366, -0.16127362847328186, 0.7956668138504028),
  scale: new Vector3(0.49000000953674316, 0.49000197649002075, 0.49000194668769836)
})
bigMossyRock.addComponentOrReplace(transform29)
const gltfShape15 = new GLTFShape("models/RockLargeMoss_01/RockLargeMoss_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
bigMossyRock.addComponentOrReplace(gltfShape15)

const sweetPea = new Entity('sweetPea')
engine.addEntity(sweetPea)
sweetPea.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(3.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sweetPea.addComponentOrReplace(transform30)
const gltfShape16 = new GLTFShape("models/Plant_04/Plant_04.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
sweetPea.addComponentOrReplace(gltfShape16)

const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
engine.addEntity(lightGreenSycamoreTree)
lightGreenSycamoreTree.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(4.5, 0, 13),
  rotation: new Quaternion(-3.1397150250376442e-15, 0.9951847791671753, -1.1863526339084274e-7, 0.0980171263217926),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
lightGreenSycamoreTree.addComponentOrReplace(transform31)
const gltfShape17 = new GLTFShape("models/TreeSycamore_01/TreeSycamore_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
lightGreenSycamoreTree.addComponentOrReplace(gltfShape17)

const kangarooPaws = new Entity('kangarooPaws')
engine.addEntity(kangarooPaws)
kangarooPaws.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(4.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kangarooPaws.addComponentOrReplace(transform32)
const gltfShape18 = new GLTFShape("models/Plant_05/Plant_05.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
kangarooPaws.addComponentOrReplace(gltfShape18)

const kangarooPaws2 = new Entity('kangarooPaws2')
engine.addEntity(kangarooPaws2)
kangarooPaws2.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(5.5, 0, 6),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999997019767761, 1, 0.9999997019767761)
})
kangarooPaws2.addComponentOrReplace(transform33)
kangarooPaws2.addComponentOrReplace(gltfShape18)

const kangarooPaws3 = new Entity('kangarooPaws3')
engine.addEntity(kangarooPaws3)
kangarooPaws3.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(5, 0, 5),
  rotation: new Quaternion(0, 0.5555703043937683, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1, 1, 1)
})
kangarooPaws3.addComponentOrReplace(transform34)
kangarooPaws3.addComponentOrReplace(gltfShape18)

const largeForestLog = new Entity('largeForestLog')
engine.addEntity(largeForestLog)
largeForestLog.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(14, 0, 11.5),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(1.9999967813491821, 2, 1.9999967813491821)
})
largeForestLog.addComponentOrReplace(transform35)
const gltfShape19 = new GLTFShape("models/Log_03/Log_03.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
largeForestLog.addComponentOrReplace(gltfShape19)

const greenRoundedPineTree4 = new Entity('greenRoundedPineTree4')
engine.addEntity(greenRoundedPineTree4)
greenRoundedPineTree4.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(13.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenRoundedPineTree4.addComponentOrReplace(transform36)
greenRoundedPineTree4.addComponentOrReplace(gltfShape9)

const greenRoundedPineTree5 = new Entity('greenRoundedPineTree5')
engine.addEntity(greenRoundedPineTree5)
greenRoundedPineTree5.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(22.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenRoundedPineTree5.addComponentOrReplace(transform37)
greenRoundedPineTree5.addComponentOrReplace(gltfShape9)

const lightGreenSquaredTree = new Entity('lightGreenSquaredTree')
engine.addEntity(lightGreenSquaredTree)
lightGreenSquaredTree.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(8, 0, 17),
  rotation: new Quaternion(-1.8912223421026957e-15, -0.0980171412229538, 1.168454311084588e-8, 0.9951847195625305),
  scale: new Vector3(0.9999988675117493, 1, 0.9999988675117493)
})
lightGreenSquaredTree.addComponentOrReplace(transform38)
const gltfShape20 = new GLTFShape("models/TreeTall_01/TreeTall_01.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
lightGreenSquaredTree.addComponentOrReplace(gltfShape20)

const lightGreenSquaredTree2 = new Entity('lightGreenSquaredTree2')
engine.addEntity(lightGreenSquaredTree2)
lightGreenSquaredTree2.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(8.5, 0, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
lightGreenSquaredTree2.addComponentOrReplace(transform39)
lightGreenSquaredTree2.addComponentOrReplace(gltfShape20)

const magentaMushroom4 = new Entity('magentaMushroom4')
engine.addEntity(magentaMushroom4)
magentaMushroom4.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom4.addComponentOrReplace(transform40)
magentaMushroom4.addComponentOrReplace(gltfShape13)

const magentaMushroom5 = new Entity('magentaMushroom5')
engine.addEntity(magentaMushroom5)
magentaMushroom5.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(4, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom5.addComponentOrReplace(transform41)
magentaMushroom5.addComponentOrReplace(gltfShape13)

const magentaMushroom6 = new Entity('magentaMushroom6')
engine.addEntity(magentaMushroom6)
magentaMushroom6.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magentaMushroom6.addComponentOrReplace(transform42)
magentaMushroom6.addComponentOrReplace(gltfShape13)

const logRound = new Entity('logRound')
engine.addEntity(logRound)
logRound.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(25.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
logRound.addComponentOrReplace(transform43)
const gltfShape21 = new GLTFShape("models/Log_04/Log_04.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
logRound.addComponentOrReplace(gltfShape21)

const mediumForestLog = new Entity('mediumForestLog')
engine.addEntity(mediumForestLog)
mediumForestLog.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(23, 0, 24.5),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(2.25, 2.25, 2.25)
})
mediumForestLog.addComponentOrReplace(transform44)
const gltfShape22 = new GLTFShape("models/Log_02/Log_02.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
mediumForestLog.addComponentOrReplace(gltfShape22)

const mediumMossyRock = new Entity('mediumMossyRock')
engine.addEntity(mediumMossyRock)
mediumMossyRock.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(25.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mediumMossyRock.addComponentOrReplace(transform45)
const gltfShape23 = new GLTFShape("models/RockMediumMoss_01/RockMediumMoss_01.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
mediumMossyRock.addComponentOrReplace(gltfShape23)

const mossRose = new Entity('mossRose')
engine.addEntity(mossRose)
mossRose.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(6, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose.addComponentOrReplace(transform46)
const gltfShape24 = new GLTFShape("models/Plant_06/Plant_06.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
mossRose.addComponentOrReplace(gltfShape24)

const mossRose2 = new Entity('mossRose2')
engine.addEntity(mossRose2)
mossRose2.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(6, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose2.addComponentOrReplace(transform47)
mossRose2.addComponentOrReplace(gltfShape24)

const rose = new Entity('rose')
engine.addEntity(rose)
rose.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose.addComponentOrReplace(transform48)
const gltfShape25 = new GLTFShape("models/Flower_03/Flower_03.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
rose.addComponentOrReplace(gltfShape25)

const rose2 = new Entity('rose2')
engine.addEntity(rose2)
rose2.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(3, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose2.addComponentOrReplace(transform49)
rose2.addComponentOrReplace(gltfShape25)

const rose3 = new Entity('rose3')
engine.addEntity(rose3)
rose3.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(4, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose3.addComponentOrReplace(transform50)
rose3.addComponentOrReplace(gltfShape25)

const mossRose3 = new Entity('mossRose3')
engine.addEntity(mossRose3)
mossRose3.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(3.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose3.addComponentOrReplace(transform51)
mossRose3.addComponentOrReplace(gltfShape24)

const mossRose4 = new Entity('mossRose4')
engine.addEntity(mossRose4)
mossRose4.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(3, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose4.addComponentOrReplace(transform52)
mossRose4.addComponentOrReplace(gltfShape24)

const smallRoundBrickGrassBed = new Entity('smallRoundBrickGrassBed')
engine.addEntity(smallRoundBrickGrassBed)
smallRoundBrickGrassBed.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(4.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
smallRoundBrickGrassBed.addComponentOrReplace(transform53)
const gltfShape26 = new GLTFShape("models/GrassPatchSmall_01/GrassPatchSmall_01.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
smallRoundBrickGrassBed.addComponentOrReplace(gltfShape26)

const gypsyMushroom = new Entity('gypsyMushroom')
engine.addEntity(gypsyMushroom)
gypsyMushroom.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom.addComponentOrReplace(transform54)
const gltfShape27 = new GLTFShape("models/Mushroom_02/Mushroom_02.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
gypsyMushroom.addComponentOrReplace(gltfShape27)

const gypsyMushroom2 = new Entity('gypsyMushroom2')
engine.addEntity(gypsyMushroom2)
gypsyMushroom2.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(3.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom2.addComponentOrReplace(transform55)
gypsyMushroom2.addComponentOrReplace(gltfShape27)

const gypsyMushroom3 = new Entity('gypsyMushroom3')
engine.addEntity(gypsyMushroom3)
gypsyMushroom3.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(3, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gypsyMushroom3.addComponentOrReplace(transform56)
gypsyMushroom3.addComponentOrReplace(gltfShape27)

const rose4 = new Entity('rose4')
engine.addEntity(rose4)
rose4.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(5.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose4.addComponentOrReplace(transform57)
rose4.addComponentOrReplace(gltfShape25)

const rose5 = new Entity('rose5')
engine.addEntity(rose5)
rose5.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(4.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose5.addComponentOrReplace(transform58)
rose5.addComponentOrReplace(gltfShape25)

const rose6 = new Entity('rose6')
engine.addEntity(rose6)
rose6.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(4.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose6.addComponentOrReplace(transform59)
rose6.addComponentOrReplace(gltfShape25)

const mossRose5 = new Entity('mossRose5')
engine.addEntity(mossRose5)
mossRose5.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose5.addComponentOrReplace(transform60)
mossRose5.addComponentOrReplace(gltfShape24)

const mossRose6 = new Entity('mossRose6')
engine.addEntity(mossRose6)
mossRose6.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose6.addComponentOrReplace(transform61)
mossRose6.addComponentOrReplace(gltfShape24)

const mossRose7 = new Entity('mossRose7')
engine.addEntity(mossRose7)
mossRose7.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(4.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose7.addComponentOrReplace(transform62)
mossRose7.addComponentOrReplace(gltfShape24)

const mossRose8 = new Entity('mossRose8')
engine.addEntity(mossRose8)
mossRose8.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(4, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose8.addComponentOrReplace(transform63)
mossRose8.addComponentOrReplace(gltfShape24)

const maidenhairFern = new Entity('maidenhairFern')
engine.addEntity(maidenhairFern)
maidenhairFern.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(4.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
maidenhairFern.addComponentOrReplace(transform64)
const gltfShape28 = new GLTFShape("models/Plant_07/Plant_07.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
maidenhairFern.addComponentOrReplace(gltfShape28)

const maidenhairFern2 = new Entity('maidenhairFern2')
engine.addEntity(maidenhairFern2)
maidenhairFern2.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(2.5, 0, 4.5),
  rotation: new Quaternion(-6.65064594497863e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
maidenhairFern2.addComponentOrReplace(transform65)
maidenhairFern2.addComponentOrReplace(gltfShape28)

const rose7 = new Entity('rose7')
engine.addEntity(rose7)
rose7.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(4, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rose7.addComponentOrReplace(transform66)
rose7.addComponentOrReplace(gltfShape25)

const roseHead = new Entity('roseHead')
engine.addEntity(roseHead)
roseHead.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(4.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roseHead.addComponentOrReplace(transform67)
const gltfShape29 = new GLTFShape("models/Flower_02/Flower_02.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
roseHead.addComponentOrReplace(gltfShape29)

const roseHead2 = new Entity('roseHead2')
engine.addEntity(roseHead2)
roseHead2.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(6, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roseHead2.addComponentOrReplace(transform68)
roseHead2.addComponentOrReplace(gltfShape29)

const roseHead3 = new Entity('roseHead3')
engine.addEntity(roseHead3)
roseHead3.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(4, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roseHead3.addComponentOrReplace(transform69)
roseHead3.addComponentOrReplace(gltfShape29)

const roseHead4 = new Entity('roseHead4')
engine.addEntity(roseHead4)
roseHead4.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(2.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roseHead4.addComponentOrReplace(transform70)
roseHead4.addComponentOrReplace(gltfShape29)

const mossRose9 = new Entity('mossRose9')
engine.addEntity(mossRose9)
mossRose9.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(3.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mossRose9.addComponentOrReplace(transform71)
mossRose9.addComponentOrReplace(gltfShape24)

const greenSycamoreTree3 = new Entity('greenSycamoreTree3')
engine.addEntity(greenSycamoreTree3)
greenSycamoreTree3.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(10.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenSycamoreTree3.addComponentOrReplace(transform72)
greenSycamoreTree3.addComponentOrReplace(gltfShape11)

const lightGreenSycamoreTree2 = new Entity('lightGreenSycamoreTree2')
engine.addEntity(lightGreenSycamoreTree2)
lightGreenSycamoreTree2.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(15.5, 0, 28),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999989867210388, 1, 0.9999989867210388)
})
lightGreenSycamoreTree2.addComponentOrReplace(transform73)
lightGreenSycamoreTree2.addComponentOrReplace(gltfShape17)

const lightGreenSquaredTree3 = new Entity('lightGreenSquaredTree3')
engine.addEntity(lightGreenSquaredTree3)
lightGreenSquaredTree3.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(4, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
lightGreenSquaredTree3.addComponentOrReplace(transform74)
lightGreenSquaredTree3.addComponentOrReplace(gltfShape20)

const lightGreenSycamoreTree3 = new Entity('lightGreenSycamoreTree3')
engine.addEntity(lightGreenSycamoreTree3)
lightGreenSycamoreTree3.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(19.5, 0, 24.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.49999913573265076, 0.5, 0.49999913573265076)
})
lightGreenSycamoreTree3.addComponentOrReplace(transform75)
lightGreenSycamoreTree3.addComponentOrReplace(gltfShape17)

const greenSycamoreTree4 = new Entity('greenSycamoreTree4')
engine.addEntity(greenSycamoreTree4)
greenSycamoreTree4.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(10.5, 0, 28.5),
  rotation: new Quaternion(-1.666837702781756e-15, 0.9238795638084412, -1.1013501932666259e-7, 0.3826834261417389),
  scale: new Vector3(1.0000083446502686, 1, 1.0000083446502686)
})
greenSycamoreTree4.addComponentOrReplace(transform76)
greenSycamoreTree4.addComponentOrReplace(gltfShape11)

const evergreenShrub2 = new Entity('evergreenShrub2')
engine.addEntity(evergreenShrub2)
evergreenShrub2.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(16.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub2.addComponentOrReplace(transform77)
evergreenShrub2.addComponentOrReplace(gltfShape3)

const birdSNestFern2 = new Entity('birdSNestFern2')
engine.addEntity(birdSNestFern2)
birdSNestFern2.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(15, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern2.addComponentOrReplace(transform78)
const gltfShape30 = new GLTFShape("models/Plant_01/Plant_01.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
birdSNestFern2.addComponentOrReplace(gltfShape30)

const birdSNestFern3 = new Entity('birdSNestFern3')
engine.addEntity(birdSNestFern3)
birdSNestFern3.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(17.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern3.addComponentOrReplace(transform79)
birdSNestFern3.addComponentOrReplace(gltfShape30)

const birdSNestFern4 = new Entity('birdSNestFern4')
engine.addEntity(birdSNestFern4)
birdSNestFern4.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(17.5, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern4.addComponentOrReplace(transform80)
birdSNestFern4.addComponentOrReplace(gltfShape30)

const lightGreenSquaredTree4 = new Entity('lightGreenSquaredTree4')
engine.addEntity(lightGreenSquaredTree4)
lightGreenSquaredTree4.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(6, 0, 22),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(0.5, 0.5, 0.5)
})
lightGreenSquaredTree4.addComponentOrReplace(transform81)
lightGreenSquaredTree4.addComponentOrReplace(gltfShape20)

const balsamFlower = new Entity('balsamFlower')
engine.addEntity(balsamFlower)
balsamFlower.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(23.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
balsamFlower.addComponentOrReplace(transform82)
const gltfShape31 = new GLTFShape("models/Plant_02/Plant_02.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
balsamFlower.addComponentOrReplace(gltfShape31)

const birdSNestFernContainer = new Entity('birdSNestFernContainer')
engine.addEntity(birdSNestFernContainer)
birdSNestFernContainer.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(9, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFernContainer.addComponentOrReplace(transform83)
const gltfShape32 = new GLTFShape("models/PlantPot_02/PlantPot_02.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
birdSNestFernContainer.addComponentOrReplace(gltfShape32)

const birdSNestFernContainer2 = new Entity('birdSNestFernContainer2')
engine.addEntity(birdSNestFernContainer2)
birdSNestFernContainer2.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(9, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFernContainer2.addComponentOrReplace(transform84)
birdSNestFernContainer2.addComponentOrReplace(gltfShape32)

const birdSNestFernContainer3 = new Entity('birdSNestFernContainer3')
engine.addEntity(birdSNestFernContainer3)
birdSNestFernContainer3.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(1, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFernContainer3.addComponentOrReplace(transform85)
birdSNestFernContainer3.addComponentOrReplace(gltfShape32)

const birdSNestFernContainer4 = new Entity('birdSNestFernContainer4')
engine.addEntity(birdSNestFernContainer4)
birdSNestFernContainer4.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(1, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFernContainer4.addComponentOrReplace(transform86)
birdSNestFernContainer4.addComponentOrReplace(gltfShape32)

const coinGeckoStatue = new Entity('coinGeckoStatue')
engine.addEntity(coinGeckoStatue)
coinGeckoStatue.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(23.5, 0, 9.5),
  rotation: new Quaternion(-1.5283430513453496e-15, 0.8819212913513184, -1.0513319637084351e-7, 0.47139671444892883),
  scale: new Vector3(1.0000025033950806, 1, 1.0000025033950806)
})
coinGeckoStatue.addComponentOrReplace(transform87)
const gltfShape33 = new GLTFShape("models/GeckoStone_01/GeckoStone_01.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
coinGeckoStatue.addComponentOrReplace(gltfShape33)

const birdSNestFern5 = new Entity('birdSNestFern5')
engine.addEntity(birdSNestFern5)
birdSNestFern5.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(9.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern5.addComponentOrReplace(transform88)
birdSNestFern5.addComponentOrReplace(gltfShape30)

const birdSNestFern6 = new Entity('birdSNestFern6')
engine.addEntity(birdSNestFern6)
birdSNestFern6.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(8.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern6.addComponentOrReplace(transform89)
birdSNestFern6.addComponentOrReplace(gltfShape30)

const birdSNestFern7 = new Entity('birdSNestFern7')
engine.addEntity(birdSNestFern7)
birdSNestFern7.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(10, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern7.addComponentOrReplace(transform90)
birdSNestFern7.addComponentOrReplace(gltfShape30)

const birdSNestFern8 = new Entity('birdSNestFern8')
engine.addEntity(birdSNestFern8)
birdSNestFern8.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(16.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern8.addComponentOrReplace(transform91)
birdSNestFern8.addComponentOrReplace(gltfShape30)

const birdSNestFern9 = new Entity('birdSNestFern9')
engine.addEntity(birdSNestFern9)
birdSNestFern9.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(16, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern9.addComponentOrReplace(transform92)
birdSNestFern9.addComponentOrReplace(gltfShape30)

const birdSNestFern12 = new Entity('birdSNestFern12')
engine.addEntity(birdSNestFern12)
birdSNestFern12.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(14.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern12.addComponentOrReplace(transform93)
birdSNestFern12.addComponentOrReplace(gltfShape30)

const birdSNestFern13 = new Entity('birdSNestFern13')
engine.addEntity(birdSNestFern13)
birdSNestFern13.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(15.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern13.addComponentOrReplace(transform94)
birdSNestFern13.addComponentOrReplace(gltfShape30)

const birdSNestFern14 = new Entity('birdSNestFern14')
engine.addEntity(birdSNestFern14)
birdSNestFern14.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(9, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern14.addComponentOrReplace(transform95)
birdSNestFern14.addComponentOrReplace(gltfShape30)

const flowerSprouts3 = new Entity('flowerSprouts3')
engine.addEntity(flowerSprouts3)
flowerSprouts3.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(13.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts3.addComponentOrReplace(transform96)
const gltfShape34 = new GLTFShape("models/Plant_03/Plant_03.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
flowerSprouts3.addComponentOrReplace(gltfShape34)

const flowerSprouts4 = new Entity('flowerSprouts4')
engine.addEntity(flowerSprouts4)
flowerSprouts4.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(12, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts4.addComponentOrReplace(transform97)
flowerSprouts4.addComponentOrReplace(gltfShape34)

const flowerSprouts5 = new Entity('flowerSprouts5')
engine.addEntity(flowerSprouts5)
flowerSprouts5.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(17.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts5.addComponentOrReplace(transform98)
flowerSprouts5.addComponentOrReplace(gltfShape34)

const lightYellowSquaredTree = new Entity('lightYellowSquaredTree')
engine.addEntity(lightYellowSquaredTree)
lightYellowSquaredTree.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(9.5, 0, 14),
  rotation: new Quaternion(-1.6293580830525293e-15, -0.290284663438797, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(0.5, 0.5, 0.5)
})
lightYellowSquaredTree.addComponentOrReplace(transform99)
const gltfShape35 = new GLTFShape("models/TreeTall_03/TreeTall_03.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
lightYellowSquaredTree.addComponentOrReplace(gltfShape35)

const smallMossyRock = new Entity('smallMossyRock')
engine.addEntity(smallMossyRock)
smallMossyRock.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(11.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallMossyRock.addComponentOrReplace(transform100)
const gltfShape36 = new GLTFShape("models/RockSmallMoss_01/RockSmallMoss_01.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
smallMossyRock.addComponentOrReplace(gltfShape36)

const sunflower4 = new Entity('sunflower4')
engine.addEntity(sunflower4)
sunflower4.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(14.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower4.addComponentOrReplace(transform101)
sunflower4.addComponentOrReplace(gltfShape7)

const sunflower5 = new Entity('sunflower5')
engine.addEntity(sunflower5)
sunflower5.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(14.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower5.addComponentOrReplace(transform102)
sunflower5.addComponentOrReplace(gltfShape7)

const flowerSprouts6 = new Entity('flowerSprouts6')
engine.addEntity(flowerSprouts6)
flowerSprouts6.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(12.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flowerSprouts6.addComponentOrReplace(transform103)
flowerSprouts6.addComponentOrReplace(gltfShape34)

const lightYellowRoundedPineTree4 = new Entity('lightYellowRoundedPineTree4')
engine.addEntity(lightYellowRoundedPineTree4)
lightYellowRoundedPineTree4.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(19, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
lightYellowRoundedPineTree4.addComponentOrReplace(transform104)
lightYellowRoundedPineTree4.addComponentOrReplace(gltfShape4)

const signpostWood = new Entity('signpostWood')
signpostWood.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(23, 0, 7.5),
  rotation: new Quaternion(-2.4564971909911415e-15, 0.8819212913513184, -1.0513320347627086e-7, 0.471396803855896),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
signpostWood.addComponentOrReplace(transform107)
engine.addEntity(signpostWood)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
// const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
// const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
// script1.init(options)
// script2.init(options)

const signpostWood2 = new Entity('signpostWood')
signpostWood2.addComponentOrReplace(transform107)
script2.spawn(signpostWood, {"text":"It was the year 2020.","fontSize":12}, createChannel(channelId, signpostWood, channelBus))
script2.spawn(signpostWood2, {"text":"It was the year 2350.","fontSize":12}, createChannel(channelId, signpostWood2, channelBus))

let delay = 1000
for (const id in engine.entities) {
    let thisEntity = engine.entities[id]
    if (thisEntity.hasComponent(GLTFShape)) {
        if ((thisEntity != _scene) && (thisEntity != signpostWood)) {
            thisEntity.addComponent(new utils.Delay(delay, function() {
                if (thisEntity.hasComponent(GLTFShape)) {
                    thisEntity.getComponent(GLTFShape).visible = false
                }
            }
            )
            )
        }
    }
    delay = delay + 300
}

const canvas = new UICanvas()
const message = new UIText(canvas)
const message2 = new UIText(canvas)
message.value = "Ecolapse"
message.fontSize = 50
message.width = 120
message.height = 60
message.vAlign = "top"
message.hAlign = "center"
message.color = Color4.Green()
message.outlineWidth = 0.3
message.outlineColor = Color4.Black()

_scene.addComponent(new utils.Delay(delay, function() {
    engine.addEntity(signpostWood2)
    engine.removeEntity(signpostWood)
    message.value = ''
    message.fontSize = 25
    message.width = 50
    message.height = 40
    message.vAlign = "top"
    message.hAlign = "center"
    message.color = Color4.White()
    message.outlineWidth = 0.3
    message.outlineColor = Color4.Black()
    message.positionX = -200

    signpostWood2.addComponent(new utils.Delay(100, function() {
        message.height = 50
        message.value = "In 3 generations, Earth would be completely barren."
        message.positionY = -30
        message.positionX = -400
        message2.value = "AT CURRENT DEFORESTATION RATE:"
        message2.fontSize = 25
        message2.width = 50
        message2.height = 40
        message2.vAlign = "top"
        message2.hAlign = "center"
        message2.color = Color4.Black()
        message2.outlineWidth = 0.3
        message2.outlineColor = Color4.Black()
        message2.positionX = -400
    }))
}))





//
// // Create screenspace component
// const text = new UIText(canvas)
// text.value = "Over 100 trees are cut down each minute."
// new utils.Delay(delay, function() {
//     for (const id in engine.entities) {
//         let thisEntity = engine.entities[id]
//         if (thisEntity.hasComponent(GLTFShape)) {
//             if (thisEntity != _scene) {
//                 thisEntity.addComponent(new utils.Delay(delay, function() {
//                     if (thisEntity.hasComponent(GLTFShape)) {
//                         thisEntity.getComponent(GLTFShape).visible = true
//                     }
//                 }
//                 ))
//             }
//         }
//     }
// }
// )
