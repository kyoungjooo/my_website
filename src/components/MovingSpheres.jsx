import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovingSpheres() {
  const ballRadius = 0.5; //공 반지름
  const posLimit = 5 - ballRadius; // 공이 움직일 수 있는 좌표 범위의 한계치
  const groupRef = useRef(null); // 공 Group 참조 ref
  const { viewport } = useThree();
  const posVectors = []; //현재 위치 저장
  const targetVectors = []; //공이 이동해야 할 목표 위치 저장
  const ballToTargetVectors = []; //현재에서 목표까지 이동해야 할 벡터
  const ballCount = 10;
  const speed = 0.02;
  for (let i = 0; i < ballCount; i++) {
    //현재 위치
    const ballAX = THREE.MathUtils.randFloat(-posLimit, posLimit);
    const ballAY = THREE.MathUtils.randFloat(-posLimit, posLimit);
    const posVector = new THREE.Vector3(ballAX, ballAY, 0);
    posVectors.push(posVector);

    //목표위치
    const targetX = THREE.MathUtils.randFloat(-posLimit, posLimit);
    const targetY = THREE.MathUtils.randFloat(-posLimit, posLimit);
    const targetVector = new THREE.Vector3(targetX, targetY, 0);
    targetVectors.push(targetVector);

    // 현재 → 목표 방향 벡터
    const ballToTargetVector = new THREE.Vector3();
    ballToTargetVector.subVectors(targetVector, posVector);
    ballToTargetVector.normalize();
    ballToTargetVector.multiplyScalar(speed);
    ballToTargetVectors.push(ballToTargetVector);
  }

  const box = new THREE.Box3();
  const center = new THREE.Vector3();
  const size = new THREE.Vector3(viewport.width, viewport.height, 0);
  box.setFromCenterAndSize(center, size);

  //박스 각 방향 경계좌표 구하기
  const leftBox = center.x - size.x * ballRadius;
  const rightBox = center.x + size.x * ballRadius;
  const bottomBox = center.y - size.y * ballRadius;
  const topBox = center.y + size.y * ballRadius;

  function checkEdge(pos, dirVec) {
    if (pos.x - ballRadius < leftBox || pos.x + ballRadius > rightBox) {
      dirVec.x = -dirVec.x;
    }
    if (pos.y - ballRadius < bottomBox || pos.y + ballRadius > topBox) {
      dirVec.y = -dirVec.y;
    }
  }

  // 매 프레임마다 위치 업데이트
  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    group.children.forEach((child, idx) => {
      const dirVec = ballToTargetVectors[idx];
      if (child instanceof THREE.Mesh && dirVec) {
        child.position.add(dirVec);
        //현재 공 위치와 방향 전달
        checkEdge(child.position, dirVec);
      }
    });
  });

  return (
    <>
      <group ref={groupRef}>
        {posVectors.length > 0 &&
          posVectors.map((posVector, index) => (
            <mesh key={index} position={posVector}>
              <sphereGeometry args={[ballRadius]} />
              <meshBasicMaterial color="#FBC02D" transparent opacity={0.2} />
            </mesh>
          ))}
      </group>
      <box3Helper args={[box, "white"]} />
    </>
  );
}
