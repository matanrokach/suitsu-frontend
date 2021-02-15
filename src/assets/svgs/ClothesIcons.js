import { ReactComponent as HatIcon } from './hat-svgrepo-com (1).svg';
import { ReactComponent as BootsIcon } from './boot-svgrepo-com.svg';
import { ReactComponent as ShortsIcon } from './shorts-pants-svgrepo-com.svg';
import { ReactComponent as ShirtIcon } from './shirt-svgrepo-com (2).svg';
import { ReactComponent as TShirtIcon } from './shirt-svgrepo-com (2).svg';
import { ReactComponent as JacketIcon } from './jacket-svgrepo-com (1).svg';
import { ReactComponent as CoatIcon } from './jacket-svgrepo-com (4).svg';
import { ReactComponent as PantsIcon } from './jeans-svgrepo-com.svg';
import { ReactComponent as SneakersIcon } from './sneaker-svgrepo-com.svg';
import { ReactComponent as SandalsIcon } from './shoe-svgrepo-com.svg';
import { Clothes } from '../../constants';

const ICON_WIDTH = 150;

const getClothesIcons = (width = ICON_WIDTH) => ({
	[Clothes.Jacket]: <JacketIcon width={width} />,
	[Clothes.Coat]: <CoatIcon width={width} />,
	[Clothes.Pants]: <PantsIcon width={width} />,
	[Clothes.Shorts]: <ShortsIcon width={width} />,
	[Clothes.Scarf]: <HatIcon width={width} />,
	[Clothes.Boots]: <BootsIcon width={width} />,
	[Clothes.Sweatshirt]: <HatIcon width={width} />,
	[Clothes.Shirt]: <ShirtIcon width={width} />,
	[Clothes.TShirt]: <TShirtIcon width={width} />,
	[Clothes.Sneakers]: <SneakersIcon width={width} />,
	[Clothes.Sandals]: <SandalsIcon width={width} />,
	[Clothes.Hat]: <HatIcon width={width} />,
});

const clothesNames = {
	[Clothes.Jacket]: 'Jacket',
	[Clothes.Coat]: 'Coat',
	[Clothes.Pants]: 'Pants',
	[Clothes.Shorts]: 'Shorts',
	[Clothes.Scarf]: 'Scarf',
	[Clothes.Boots]: 'Boots',
	[Clothes.Sweatshirt]: 'Sweatshirt',
	[Clothes.Shirt]: 'Shirt',
	[Clothes.TShirt]: 'T-Shirt',
	[Clothes.Sneakers]: 'Sneakers',
	[Clothes.Sandals]: 'Sandals',
	[Clothes.Hat]: 'Hat',
};

const ClothesIcons = getClothesIcons(ICON_WIDTH);

export { getClothesIcons, clothesNames };

export default ClothesIcons;
