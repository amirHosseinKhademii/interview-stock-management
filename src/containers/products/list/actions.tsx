import { useUi } from 'hooks/use-ui'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICEdit } from 'icons/edit'
import { ICShopCart } from 'icons/shop-cart'
import { ICMemory } from 'icons/memory'
import { ICPlus } from 'icons/plus'
import { ICEyeFill } from 'icons/eye-fill'

export const ProductsListActions = ({ item }) => {
  const { toggleDialog } = useUi()

  return (
    <div className=" hidden group-hover:flex  items-center justify-end ">
      <Tooltip content="Refill">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-refill',
              data: item,
            })
          }}
        >
          <ICPlus className="text-red-500 w-7 h-7 mr-1 " />
        </Button>
      </Tooltip>

      <Tooltip content="Buy">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-buy',
              data: item,
            })
          }}
        >
          <ICShopCart className="text-green-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Reserve">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-reserve',
              data: item,
            })
          }}
        >
          <ICMemory className="text-yellow-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-update',
              data: item,
            })
          }}
        >
          <ICEdit className="text-gray-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Details">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-details',
              data: item,
            })
          }}
        >
          <ICEyeFill className="text-blue-500 w-4 h-4  " />
        </Button>
      </Tooltip>
    </div>
  )
}
