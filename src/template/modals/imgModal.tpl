<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" style="position: relative;top: 150px;left: 200px;z-index: 10003" data-toggle="modal" data-target="#myModal">
    Launch demo modal
</button>

<div id="myModal" class="modal fade gome-modal" style="z-index:10002" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">素材库</h4>
            </div>
            <div class="modal-body dialog-contain clearfix">
               <div class="gome-modal-bar">
                   <ul class="fix-nav">
                       <li class="active"><a href="javascript:;">图片库</a></li>
                   </ul>
                   <ul class="group-nav"></ul>
                   <ul class="add-tool"></ul>
                   <div class="uploading"></div>
               </div>
                <div class="gome-modal-list"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->