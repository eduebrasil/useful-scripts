USE [master]
GO
DECLARE @return_value int
 
EXEC @return_value = [dbo].[sp_CSS_RestoreDir]
    @restoreFromDir = N'C:\Backups\',
    @MatchFileList ='y',
    @pattern = '%.BAK'
 
SELECT 'Return Value' = @return_value
GO

-- optional 
EXECUTE sp_MSForEachDB '
            USE ?;
            DECLARE @user NVARCHAR(MAX);
            SELECT @user = SUSER_SNAME();
            EXEC sp_addrolemember N''db_owner'', @user;'