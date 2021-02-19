import { ReactComponent as HatIcon } from './clothes/hat.svg';
import { ReactComponent as BootsIcon } from './clothes/boot.svg';
import { ReactComponent as ShortsIcon } from './clothes/shorts.svg';
import { ReactComponent as ShirtIcon } from './clothes/tshirt.svg';
import { ReactComponent as TShirtIcon } from './clothes/tshirt.svg';
import { ReactComponent as JacketIcon } from './clothes/jacket.svg';
import { ReactComponent as CoatIcon } from './clothes/coat.svg';
import { ReactComponent as PantsIcon } from './clothes/jeans.svg';
import { ReactComponent as SneakersIcon } from './clothes/sneaker.svg';
import { ReactComponent as SandalsIcon } from './clothes/shoe.svg';
import { ReactComponent as CapIcon } from './clothes/cap.svg';
import { ReactComponent as ScarfIcon } from './clothes/scarf.svg';
import { ReactComponent as SocksIcon } from './clothes/socks.svg';
import { ReactComponent as GlassesIcon } from './clothes/glasses.svg';
import { ReactComponent as GlovesIcon } from './clothes/gloves.svg';
import { ReactComponent as HoodieIcon } from './clothes/hoodie.svg';
import { ReactComponent as UmbrellaIcon } from './clothes/umbrella.svg';
import { ReactComponent as SweaterIcon } from './clothes/pullover.svg';
import { ReactComponent as WinterHatIcon } from './clothes/winter-hat.svg';
import { ReactComponent as ShoeIcon } from './clothes/shoe.svg';
import { Clothes } from '../../constants';

const ICON_WIDTH = 150;

const getClothesIcons = (width = ICON_WIDTH) => ({
	[Clothes.Jacket]: <JacketIcon width={width} />,
	[Clothes.Coat]: <CoatIcon width={width} />,
	[Clothes.Pants]: <PantsIcon width={width} />,
	[Clothes.Shorts]: <ShortsIcon width={width} />,
	[Clothes.Boots]: <BootsIcon width={width} />,
	[Clothes.Sweatshirt]: <HoodieIcon width={width} />,
	[Clothes.Shirt]: <ShirtIcon width={width} />,
	[Clothes.TShirt]: <TShirtIcon width={width} />,
	[Clothes.Sneakers]: <SneakersIcon width={width} />,
	[Clothes.Sandals]: <SandalsIcon width={width} />,
	[Clothes.Hat]: <HatIcon width={width} />,
	[Clothes.Cap]: <CapIcon width={width} />,
	[Clothes.Scarf]: <ScarfIcon width={width} />,
	[Clothes.Socks]: <SocksIcon width={width} />,
	[Clothes.Glasses]: <GlassesIcon width={width} />,
	[Clothes.Gloves]: <GlovesIcon width={width} />,
	[Clothes.Umbrella]: <UmbrellaIcon width={width} />,
	[Clothes.Sweater]: <SweaterIcon width={width} />,
	[Clothes.WinterHat]: <WinterHatIcon width={width} />,
	[Clothes.Shoe]: <ShoeIcon width={width} />,
});

const clothesNames = {
	[Clothes.Jacket]: 'Jacket',
	[Clothes.Coat]: 'Coat',
	[Clothes.Pants]: 'Pants',
	[Clothes.Shorts]: 'Shorts',
	[Clothes.Boots]: 'Boots',
	[Clothes.Sweatshirt]: 'Sweatshirt',
	[Clothes.Shirt]: 'Shirt',
	[Clothes.TShirt]: 'T-Shirt',
	[Clothes.Sneakers]: 'Sneakers',
	[Clothes.Sandals]: 'Sandals',
	[Clothes.Hat]: 'Hat',
	[Clothes.Cap]: 'Cap',
	[Clothes.Scarf]: 'Scarf',
	[Clothes.Socks]: 'Socks',
	[Clothes.Glasses]: 'Glasses',
	[Clothes.Gloves]: 'Gloves',
	[Clothes.Umbrella]: 'Umbrella',
	[Clothes.Sweater]: 'Sweater',
	[Clothes.WinterHat]: 'Winter hat',
	[Clothes.Shoe]: 'Shoe',
};

const ClothesIcons = getClothesIcons(ICON_WIDTH);

export { getClothesIcons, clothesNames };

export default ClothesIcons;
