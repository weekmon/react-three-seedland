import { useGLTF, useTexture } from '@react-three/drei'
import { LayerMaterial, Texture } from 'lamina'
import { forwardRef } from 'react'
import { DoubleSide } from 'three'

export const Flower = forwardRef((props, ref) => {
  const { nodes } = useGLTF('/models/seed4.glb')
  const map = useTexture('/textures/color.jpg')
  const ao = useTexture('/textures/ao.jpg')

  return (
    <group>
      <instancedMesh
        position={(0, -10, -1)}
        scale={(30, 30, 30)}
        ref={ref}
        args={[undefined, undefined, 0]}
        castShadow
        receiveShadow
        geometry={nodes.球体.geometry}
        {...props}>
        <LayerMaterial lighting="standard" side={DoubleSide}>
          <Texture map={map} />
          <Texture map={ao} mode="multiply" />
        </LayerMaterial>
      </instancedMesh>
    </group>
  )
})
