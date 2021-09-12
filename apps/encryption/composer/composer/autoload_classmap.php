<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = $vendorDir;

return array(
    'OCA\\Encryption\\AppInfo\\Application' => $baseDir . '/../lib/AppInfo/Application.php',
    'OCA\\Encryption\\Command\\DisableMasterKey' => $baseDir . '/../lib/Command/DisableMasterKey.php',
    'OCA\\Encryption\\Command\\EnableMasterKey' => $baseDir . '/../lib/Command/EnableMasterKey.php',
    'OCA\\Encryption\\Command\\FixEncryptedVersion' => $baseDir . '/../lib/Command/FixEncryptedVersion.php',
    'OCA\\Encryption\\Command\\RecoverUser' => $baseDir . '/../lib/Command/RecoverUser.php',
    'OCA\\Encryption\\Command\\ScanLegacyFormat' => $baseDir . '/../lib/Command/ScanLegacyFormat.php',
    'OCA\\Encryption\\Controller\\RecoveryController' => $baseDir . '/../lib/Controller/RecoveryController.php',
    'OCA\\Encryption\\Controller\\SettingsController' => $baseDir . '/../lib/Controller/SettingsController.php',
    'OCA\\Encryption\\Controller\\StatusController' => $baseDir . '/../lib/Controller/StatusController.php',
    'OCA\\Encryption\\Crypto\\Crypt' => $baseDir . '/../lib/Crypto/Crypt.php',
    'OCA\\Encryption\\Crypto\\DecryptAll' => $baseDir . '/../lib/Crypto/DecryptAll.php',
    'OCA\\Encryption\\Crypto\\EncryptAll' => $baseDir . '/../lib/Crypto/EncryptAll.php',
    'OCA\\Encryption\\Crypto\\Encryption' => $baseDir . '/../lib/Crypto/Encryption.php',
    'OCA\\Encryption\\Exceptions\\MultiKeyDecryptException' => $baseDir . '/../lib/Exceptions/MultiKeyDecryptException.php',
    'OCA\\Encryption\\Exceptions\\MultiKeyEncryptException' => $baseDir . '/../lib/Exceptions/MultiKeyEncryptException.php',
    'OCA\\Encryption\\Exceptions\\PrivateKeyMissingException' => $baseDir . '/../lib/Exceptions/PrivateKeyMissingException.php',
    'OCA\\Encryption\\Exceptions\\PublicKeyMissingException' => $baseDir . '/../lib/Exceptions/PublicKeyMissingException.php',
    'OCA\\Encryption\\HookManager' => $baseDir . '/../lib/HookManager.php',
    'OCA\\Encryption\\Hooks\\Contracts\\IHook' => $baseDir . '/../lib/Hooks/Contracts/IHook.php',
    'OCA\\Encryption\\Hooks\\UserHooks' => $baseDir . '/../lib/Hooks/UserHooks.php',
    'OCA\\Encryption\\KeyManager' => $baseDir . '/../lib/KeyManager.php',
    'OCA\\Encryption\\Migration\\SetMasterKeyStatus' => $baseDir . '/../lib/Migration/SetMasterKeyStatus.php',
    'OCA\\Encryption\\Recovery' => $baseDir . '/../lib/Recovery.php',
    'OCA\\Encryption\\Session' => $baseDir . '/../lib/Session.php',
    'OCA\\Encryption\\Settings\\Admin' => $baseDir . '/../lib/Settings/Admin.php',
    'OCA\\Encryption\\Settings\\Personal' => $baseDir . '/../lib/Settings/Personal.php',
    'OCA\\Encryption\\Users\\Setup' => $baseDir . '/../lib/Users/Setup.php',
    'OCA\\Encryption\\Util' => $baseDir . '/../lib/Util.php',
);
