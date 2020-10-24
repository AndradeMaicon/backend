import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStoregeProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
